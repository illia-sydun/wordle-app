import { AnswerStatus } from '@shared/types/Answer.ts';
import { AnimationState } from '@shared/types/AnimationState.ts';
import { action, computed, observable } from 'mobx';
import { WordOfTheDay } from '@shared/types/Word.ts';
import { BoardCellStore } from '@shared/stores/BoardStore/BoardCellStore.ts';

type BoardRow = {
    index: number;
    cells: BoardCellStore[];
    status: AnswerStatus;
    animationState: AnimationState;
};

export class BoardRowStore implements BoardRow {
    @observable accessor index: BoardRow['index'];
    @observable accessor cells: BoardRow['cells'];
    @observable accessor status: BoardRow['status'];
    @observable accessor animationState: BoardRow['animationState'];

    constructor(
        cells: BoardRow['cells'][number]['value'][],
        rowIndex: BoardRow['index'],
    ) {
        this.index = rowIndex;
        this.cells = cells.map(
            (cell, cellIndex) => new BoardCellStore(cell, cellIndex, rowIndex),
        );
        this.status = 'empty';
        this.animationState = 'idle';
    }

    @computed
    get isActive() {
        return this.status !== 'empty' && this.status !== 'submitted';
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
    get isInvalid() {
        return this.status === 'invalid';
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
    get prevActiveCell() {
        return this.cells[this.indexOfActiveCell - 1] ?? this.activeCell;
    }

    @computed
    get cellToClearOnBackspaceKeyPress() {
        if (!this.activeCell.isEmpty) {
            return this.activeCell;
        }

        if (!this.prevActiveCell.isEmpty) {
            return this.prevActiveCell;
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

    // @TODO mobx fix that mess with word
    @action
    setStatus(status: BoardRow['status'], word?: WordOfTheDay['word']) {
        this.status = status;

        // @TODO rework it all with delay as well. maybe add reaction instead of delay
        if (status === 'submitted' && word) {
            this.cells.forEach((cell) => cell.submit(word));

            if (this.value === word) {
                const delay = this.cells
                    .slice(0, -1)
                    .reduce((acc, item) => acc + item.transitionDelay, 0);

                setTimeout(() => this.startAnimation('flip_infinite'), delay);
            }
        } else if (status === 'invalid') {
            this.startAnimation('shake');
        }
    }

    @action.bound
    startAnimation(animationState: BoardRow['animationState']) {
        this.animationState = animationState;
    }

    @action.bound
    stopAnimation() {
        this.animationState = 'idle';
    }
}
