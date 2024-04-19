import { action, computed, observable } from 'mobx';
import { KeyboardStore } from '../KeyboardStore';
import { BoardStore } from '../BoardStore';
import { WordStore } from '../WordStore';
import { SnackbarsStore } from '../SnackbarStore';
import { KeyboardKey } from '@shared/types/KeyboardKey.ts';
import { vibrationService } from '../../../services/vibration';
import { getRandomElementFromArray } from '@shared/helpers/getRandomElementFromArray.ts';

export interface MobxStore {
    rootStore: RootStore;
}

type Root = {
    keyboardStore: WithoutRootStore<KeyboardStore>;
    boardStore: WithoutRootStore<BoardStore>;
    wordStore: WithoutRootStore<WordStore>;
    snackbarsStore: WithoutRootStore<SnackbarsStore>;
};

type GameState = 'pending' | 'won' | 'lost';

type WithoutRootStore<T> = Omit<T, 'rootStore'>;

class RootStore implements Root {
    keyboardStore: WithoutRootStore<KeyboardStore>;
    boardStore: WithoutRootStore<BoardStore>;
    wordStore: WithoutRootStore<WordStore>;
    snackbarsStore: WithoutRootStore<SnackbarsStore>;

    @observable accessor gameState: GameState;
    @observable accessor interval: NodeJS.Timeout | undefined;

    constructor() {
        // order is important
        this.snackbarsStore = new SnackbarsStore(this);
        this.wordStore = new WordStore(this);
        this.boardStore = new BoardStore(this);
        this.keyboardStore = new KeyboardStore(this);

        this.gameState = 'pending';
        this.interval = undefined;
    }

    @action.bound
    reset() {
        this.setGameState('pending');
        this.handleSetInterval(undefined);

        this.snackbarsStore.reset();

        const { word } = this.wordStore.reset();
        this.boardStore.reset();
        this.keyboardStore.init(word);
    }

    @action
    handleSetInterval(interval: NodeJS.Timeout | undefined) {
        clearInterval(this.interval);
        this.interval = interval;
    }

    @computed
    get isGamePending() {
        return this.gameState === 'pending';
    }

    @computed
    get isGameOver() {
        return !this.isGamePending;
    }

    @computed
    get isGameWon() {
        return this.gameState === 'won';
    }

    @computed
    get isGameLost() {
        return this.gameState === 'lost';
    }

    @action
    setGameState(state: GameState) {
        this.gameState = state;

        if (this.isGameLost) {
            this.snackbarsStore.reset();
        }

        if (this.isGameWon) {
            // @TODO move it to GameWonView
            this.handleSetInterval(
                setInterval(() => {
                    vibrationService.vibrate('fireworks');
                }, 1350),
            );
        }
    }

    @action.bound
    handleKeyPress(key: KeyboardKey, isLongPress: boolean = false) {
        if (!this.keyboardStore.keys[key]) {
            return;
        }

        if (this.keyboardStore.keys[key].isClickable && !isLongPress) {
            this.keyboardStore.keys[key].startAnimation('click');
        }

        if (key === 'escape') {
            return this.reset();
        }

        if (this.isGameOver) {
            return;
        }

        if (isLongPress) {
            if (key === 'backspace') {
                while (
                    this.boardStore.activeRow.cellToClearOnBackspaceKeyPress !==
                    null
                ) {
                    this.boardStore.activeRow.cellToClearOnBackspaceKeyPress?.setValue(
                        '',
                    );
                }
            }
            return;
        }
        // @TODO added quickly

        if (this.keyboardStore.keys[key].isNotMatched) {
            const messages: string[] = [
                `Oops! You've already tried "${this.keyboardStore.keys[key].label}".`,
                `Nope! "${this.keyboardStore.keys[key].label}" has already been ruled out.`,
                `Hey there! "${this.keyboardStore.keys[key].label}" isn't the one.`,
                `Uh-oh! "${this.keyboardStore.keys[key].label}" has already been crossed off.`,
                `Not quite! "${this.keyboardStore.keys[key].label}" has already had its turn.`,
                `Looks like "${this.keyboardStore.keys[key].label}" is a no-go.`,
                `Hey there! "${this.keyboardStore.keys[key].label}" won't cut it.`,
                `Hmm... "${this.keyboardStore.keys[key].label}" isn't the right choice.`,
                `Oh dear! "${this.keyboardStore.keys[key].label}" has already been eliminated.`,
                `Not this time! "${this.keyboardStore.keys[key].label}" has already been taken off the list.`,
            ];

            this.snackbarsStore.openSnackbar({
                title: getRandomElementFromArray(messages),
                duration: 3000,
                type: 'info',
            });
        }

        // @TODO can be introduced with hard mode
        // if (this.keyboardStore.keys[key].isNotMatched) {
        if (!this.keyboardStore.keys[key].isClickable) {
            this.boardStore.activeRow.activeCell.startAnimation('shake');
            this.keyboardStore.keys[key].startAnimation('shake');
            return;
        }

        if (key.length === 1) {
            this.boardStore.activeRow.cellToUpdateOnKeyPress?.setValue(key);
            return;
        }

        if (key === 'backspace') {
            this.boardStore.activeRow.cellToClearOnBackspaceKeyPress?.setValue(
                '',
            );
            return;
        }

        if (key === 'enter') {
            if (!this.boardStore.activeRow.canBeSubmitted) {
                this.boardStore.activeRow.setStatus(
                    'invalid',
                    'word_incomplete',
                );
                return;
            }

            if (!this.boardStore.isActiveRowValueUnique) {
                this.boardStore.activeRow.setStatus(
                    'invalid',
                    'word_already_submitted',
                );
                return;
            }

            const isWordExists = this.wordStore.checkIfWordExists(
                this.boardStore.activeRow.value,
            );

            if (!isWordExists) {
                this.boardStore.activeRow.setStatus(
                    'invalid',
                    'word_doesnt_exist',
                );
                return;
            }

            this.boardStore.activeRow.setStatus('submitted');
        }
    }

    @action.bound
    stopGame(success: boolean) {
        const delay = this.boardStore.activeRow.cells
            .slice(0, -1)
            .reduce((acc, item) => acc + item.transitionDelay, 0);

        setTimeout(
            action(() => {
                if (success) {
                    this.boardStore.lastSubmittedRow.cells.forEach((cell) => {
                        cell.startAnimation('jump');
                    });
                    // @TODO added quickly

                    const messages: string[] = [
                        `Congratulations! You nailed it! "${this.wordStore.word.toUpperCase()}" is the word of the day!`,
                        `Wow, you did it! "${this.wordStore.word.toUpperCase()}" is spot on! Enjoy the victory!`,
                        `Incredible! You guessed it! "${this.wordStore.word.toUpperCase()}" is the winning word!`,
                        `You're on fire! "${this.wordStore.word.toUpperCase()}" is the correct answer! Celebrate your success!`,
                        `Bravo! "${this.wordStore.word.toUpperCase()}" is the word you were looking for! Enjoy the triumph!`,
                        `Amazing job! "${this.wordStore.word.toUpperCase()}" is the winning word! Time to celebrate!`,
                        `Hooray! You got it right! "${this.wordStore.word.toUpperCase()}" is the word of the day! Enjoy the victory parade!`,
                        `Well done! "${this.wordStore.word.toUpperCase()}" is the correct answer! Celebrate with fireworks!`,
                        `Fantastic! "${this.wordStore.word.toUpperCase()}" is the winning word! Let the celebrations begin!`,
                        `You're a word wizard! "${this.wordStore.word.toUpperCase()}" is the word of the day! Enjoy the fireworks show!`,
                    ];

                    this.snackbarsStore.openSnackbar({
                        title: getRandomElementFromArray(messages),
                        duration: 8000,
                        type: 'success',
                    });
                }
                this.setGameState(success ? 'won' : 'lost');
            }),
            delay,
        );
    }
}

export const rootStore = new RootStore();
