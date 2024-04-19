import { AnimationState } from '@shared/types/AnimationState.ts';
import { action, computed, observable } from 'mobx';
import { BoardCellStore } from '@shared/stores/BoardStore/BoardCellStore.ts';
import { RowStatus } from '@shared/types/RowStatus.ts';
import { MobxStore } from '@shared/stores/RootStore/RootStore.ts';
import { AnimationEvent } from 'react';
import { vibrationService } from '../../../services/vibration';
import { loggingService } from '../../../services/logging';
import { RowError } from '@shared/types/RowError.ts';
import { Snackbar } from '@shared/stores/SnackbarStore';
import { getRandomElementFromArray } from '@shared/helpers/getRandomElementFromArray.ts';

type BoardRow = {
    index: number;
    cells: BoardCellStore[];
    status: RowStatus;
    error?: RowError;
    animationState: AnimationState;
};

export class BoardRowStore implements MobxStore, BoardRow {
    @observable accessor rootStore: MobxStore['rootStore'];

    @observable accessor index: BoardRow['index'];
    @observable accessor cells: BoardRow['cells'];
    @observable accessor status: BoardRow['status'];
    @observable accessor error: BoardRow['error'];
    @observable accessor animationState: BoardRow['animationState'];

    constructor(
        rootStore: MobxStore['rootStore'],
        cells: BoardRow['cells'][number]['value'][],
        rowIndex: BoardRow['index'],
    ) {
        this.rootStore = rootStore;

        this.index = rowIndex;
        this.cells = cells.map(
            (cell, cellIndex) =>
                new BoardCellStore(this.rootStore, cell, cellIndex, rowIndex),
        );
        this.status = 'empty';
        this.animationState = 'idle';
    }

    @computed
    get isActive() {
        return this.index === this.rootStore.boardStore.indexOfActiveRow;
    }

    @computed
    get isSubmitted() {
        return this.status === 'submitted';
    }

    @computed
    get canBeSubmitted() {
        return !this.cells.some((cell) => cell.isEmpty);
    }

    @computed
    get indexOfActiveCell() {
        const index = this.cells.findIndex((cell) => cell.isEmpty);
        const lastIndex = this.cells.length - 1;
        return index === -1 ? lastIndex : index;
    }

    @computed
    get activeCell() {
        return this.cells[this.indexOfActiveCell];
    }

    @computed
    get cellBeforeActive() {
        return this.cells[this.indexOfActiveCell - 1] ?? this.activeCell;
    }

    @computed
    get cellToClearOnBackspaceKeyPress() {
        if (!this.activeCell.isEmpty) {
            return this.activeCell;
        }

        if (!this.cellBeforeActive.isEmpty) {
            return this.cellBeforeActive;
        }

        return null;
    }

    @computed
    get cellToUpdateOnKeyPress(): BoardRow['cells'][number] | null {
        return this.activeCell.isEmpty ? this.activeCell : null;
    }

    @computed
    get value() {
        return this.cells.map((cell) => cell.value).join('');
    }

    @computed
    get isEmpty() {
        return this.value === '';
    }

    // @TODO mobx fix that mess with word
    @action
    setStatus<Status extends BoardRow['status']>(
        ...[status, error]: Status extends 'invalid'
            ? [Status, NonNullable<BoardRow['error']>]
            : [Status]
    ) {
        this.status = status;

        // @TODO rework it all with delay as well. maybe add reaction instead of delay
        if (status === 'submitted') {
            const vibrationPattern: number[] = [];
            this.cells.forEach((cell) => {
                cell.submit(this.rootStore.wordStore.word);

                const vibrationDelay = 300;
                let vibrationDuration;
                switch (cell.status) {
                    case 'match':
                        vibrationDuration = 200;
                        break;
                    case 'close_match':
                        vibrationDuration = 80;
                        break;
                    default:
                        vibrationDuration = 20;
                        break;
                }
                vibrationPattern.push(vibrationDuration);
                vibrationPattern.push(vibrationDelay);
            });

            vibrationService.vibrate(vibrationPattern);

            if (this.value === this.rootStore.wordStore.word) {
                this.rootStore.stopGame(true);
            } else if (this.rootStore.boardStore.areAllRowsSubmitted) {
                this.rootStore.stopGame(false);
            } else {
                const numberOfMatchedCells = this.cells.reduce(
                    (acc, item) => acc + (item.status === 'match' ? 1 : 0),
                    0,
                );

                let title: Snackbar['title'] = '';
                let type: Snackbar['type'] = 'warning';
                // @TODO added quickly

                if (numberOfMatchedCells === 0) {
                    const messages: string[] = [
                        `Hmm... Not quite. Keep trying!`,
                        `Not a match! Keep searching!`,
                        `No matches yet! Keep going!`,
                        `Nope, not this time. Keep guessing!`,
                        `Looks like we're off to a tricky start! Keep going!`,
                        `Zero matches! Keep searching!`,
                        `No matches yet! You can do it!`,
                        `Not quite there yet! Keep guessing!`,
                        `Nope, keep searching!`,
                        `Zero matches! You've got this!`,
                    ];
                    title = getRandomElementFromArray(messages);
                    type = 'message';
                } else if (numberOfMatchedCells === 1) {
                    const messages: string[] = [
                        `Alright, you're on the right track.`,
                        `Nice start! Keep going!`,
                        `You've got one! Keep it up!`,
                        `One down, a few more to go!`,
                        `One match! You're making progress!`,
                        `Good job! You've found one match!`,
                        `You're onto something!`,
                        `You're close! Keep searching!`,
                        `One letter matched! Keep it up!`,
                        `You've got a match! Great job!`,
                    ];
                    title = getRandomElementFromArray(messages);
                    type = 'warning';
                } else if (numberOfMatchedCells === 2) {
                    const messages: string[] = [
                        `Pretty good guess. Keep going!`,
                        `You're getting warmer! Keep it up!`,
                        `Nice! You've got two matches!`,
                        `Two matches! You're making progress!`,
                        `Keep going! You're on the right track!`,
                        `You're getting closer! Keep searching!`,
                        `Two down, a couple more to go!`,
                        `You're on fire! Keep going!`,
                        `Two letters matched! Great job!`,
                        `You're doing great! Keep it up!`,
                    ];
                    title = getRandomElementFromArray(messages);
                    type = 'warning';
                } else if (numberOfMatchedCells === 3) {
                    const messages: string[] = [
                        `Close enough. Any ideas what it could be?`,
                        `You're almost there! Keep going!`,
                        `Three matches! Keep it up!`,
                        `You're so close! Keep searching!`,
                        `Almost! Just a little more to go!`,
                        `Three down, just a few more to go!`,
                        `You're getting really close! Keep it up!`,
                        `You're doing fantastic! Keep going!`,
                        `Three letters matched! Great progress!`,
                        `You're getting there! Keep it up!`,
                    ];
                    title = getRandomElementFromArray(messages);
                    type = 'success';
                } else if (numberOfMatchedCells === 4) {
                    const messages: string[] = [
                        `Wow, congrats! Now go on and type the right word!`,
                        `You're so close! You've almost got it!`,
                        `Amazing! You're almost there! Keep going!`,
                        `Four matches! You're almost done!`,
                        `You're so close to cracking it! Keep going!`,
                        `You're almost there! Keep pushing!`,
                        `Fantastic! Just one more to go!`,
                        `Incredible! You're almost at the finish line!`,
                        `Just one more match! You're almost there!`,
                        `You're on fire! Keep going!`,
                    ];
                    title = getRandomElementFromArray(messages);
                    type = 'success';
                }

                this.rootStore.snackbarsStore.openSnackbar({
                    title,
                    type,
                    duration: 3000,
                });
            }
        } else if (status === 'invalid') {
            if (error === 'word_incomplete' && !this.isEmpty) {
                const messages: string[] = [
                    `Uh-oh! Looks like you still need ${5 - this.value.length} more letters.`,
                    `Oops! You're almost there, just ${5 - this.value.length} letters to go!`,
                    `Hey there! Only ${5 - this.value.length} more letters needed to complete the word.`,
                    `Oopsie! You're short by ${5 - this.value.length} characters.`,
                    `Whoops! You're missing ${5 - this.value.length} letters to solve the word.`,
                    `Uh-oh! ${5 - this.value.length} more letters needed to crack the code.`,
                    `Oh no! Only ${5 - this.value.length} letters left to find.`,
                    `Nearly there! Just ${5 - this.value.length} more letters to complete the word.`,
                    `Hey, you're almost done! Just ${5 - this.value.length} letters left.`,
                    `Hang in there! ${5 - this.value.length} more letters to go to solve the word.`,
                ];

                this.rootStore.snackbarsStore.openSnackbar({
                    title: getRandomElementFromArray(messages),
                    duration: 2750,
                    type: 'error',
                });
            }

            if (error === 'word_already_submitted') {
                const messages: string[] = [
                    `Oops! It seems you've already tried this word before.`,
                    `Uh-oh! Looks like you've already guessed this word.`,
                    `Sorry! You've already attempted this word.`,
                    `Whoops! This word has already been guessed.`,
                    `Hey there! You've already tried this word.`,
                    `Hmm... Looks like you've already submitted this word.`,
                    `Sorry, this word has already been guessed.`,
                    `Oh no! It seems you've already tried this word.`,
                    `Oopsie! This word has already been guessed.`,
                    `Uh-oh! Looks like this word has already been tried.`,
                ];
                this.rootStore.snackbarsStore.openSnackbar({
                    title: getRandomElementFromArray(messages),
                    duration: 3000,
                    type: 'error',
                });
            }

            if (error === 'word_doesnt_exist') {
                const messages: string[] = [
                    `Oh dear! "${this.value.toUpperCase()}" seems to be in hiding from our dictionary.`,
                    `Alas! "${this.value.toUpperCase()}" appears to be playing hide and seek with our dictionary.`,
                    `Oops! It seems "${this.value.toUpperCase()}" has taken a detour away from our dictionary.`,
                    `Oh no! Our dictionary is scratching its head over "${this.value.toUpperCase()}".`,
                    `Hmm... It seems "${this.value.toUpperCase()}" is having a game of hide-and-seek with our dictionary.`,
                    `Yikes! Our dictionary is stumped by "${this.value.toUpperCase()}".`,
                    `Whoops-a-daisy! "${this.value.toUpperCase()}" seems to have taken a vacation from our dictionary.`,
                    `Uh-oh! It appears "${this.value.toUpperCase()}" has gone off the grid as far as our dictionary is concerned.`,
                    `Eek! Our dictionary is feeling a bit puzzled by "${this.value.toUpperCase()}".`,
                    `Oh dear! It seems "${this.value.toUpperCase()}" is out of bounds for our dictionary.`,
                ];
                this.rootStore.snackbarsStore.openSnackbar({
                    title: getRandomElementFromArray(messages),
                    duration: 8000,
                    type: 'error',
                });
                loggingService.info(
                    `Someone requested to add word ${this.value.toUpperCase()} to the dictionary`,
                );
            }

            this.startAnimation('shake');
        }
    }

    @action.bound
    startAnimation(animationState: BoardRow['animationState']) {
        switch (animationState) {
            case 'shake':
                vibrationService.vibrate(animationState);
        }

        this.animationState = animationState;
    }

    @action.bound
    stopAnimation(event?: AnimationEvent) {
        event?.stopPropagation();
        this.animationState = 'idle';
    }
}
