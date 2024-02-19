import { KeyboardKey } from '@shared/types/KeyboardKey.ts';
import { CellStatus } from '@shared/types/CellStatus.ts';
import { AnimationState } from '@shared/types/AnimationState.ts';
import { action, computed, observable, reaction } from 'mobx';
import { WordOfTheDay } from '@shared/types/Word.ts';
import { keyboardStore } from '@shared/stores/KeyboardStore';
import { boardStore } from '@shared/stores/BoardStore/BoardStore.ts';

type BoardCell = {
    index: number;
    rowIndex: number;
    value: KeyboardKey | '';
    status: CellStatus;
    animationState: AnimationState;
};

export class BoardCellStore implements BoardCell {
    @observable accessor index: BoardCell['index'];
    @observable accessor rowIndex: BoardCell['rowIndex'];
    @observable accessor value: BoardCell['value'];
    @observable accessor status: BoardCell['status'];
    @observable accessor animationState: BoardCell['animationState'];

    constructor(
        value: BoardCell['value'],
        index: BoardCell['index'],
        rowIndex: BoardCell['rowIndex'],
    ) {
        this.value = value;
        this.index = index;
        this.rowIndex = rowIndex;
        this.status = 'empty';
        this.animationState = 'idle';
    }

    @computed
    get isEmpty() {
        return this.value === '';
    }

    // @TODO mobx emmmm IDK
    @computed
    get isActive() {
        return (
            this.rowIndex === boardStore.indexOfActiveRow &&
            this.index === boardStore.activeRow.indexOfActiveCell
        );
    }

    @computed
    get isSubmitted() {
        // @TODO mobx extract array from here
        const submittedStatuses: CellStatus[] = [
            'match',
            'no_match',
            'close_match',
        ];
        return submittedStatuses.includes(this.status);
    }

    @computed
    get animationDelayStyles() {
        if (this.isSubmitted) {
            return {
                transitionDelay: `${this.index * 300}ms`,
                animationDelay: `${this.index * 250}ms`,
            };
        }
    }

    @action
    setValue(value: BoardCell['value']) {
        this.value = value;
        this.setStatus(value ? 'touched' : 'empty');
    }

    @action
    setStatus(status: BoardCell['status']) {
        this.status = status;
    }

    // @TODO mobx fix word mess
    @action
    submit(word: WordOfTheDay['word']) {
        let status: BoardCell['status'] = 'no_match';

        if (word[this.index] === this.value) {
            status = 'match';
        } else if (word.includes(this.value)) {
            status = 'close_match';
        }

        this.setStatus(status);
        this.startAnimation('flip');

        keyboardStore.keys[this.value as KeyboardKey].visit(this.index);
    }

    @action.bound
    startAnimation(animationState: BoardCell['animationState']) {
        this.animationState = animationState;
    }

    @action.bound
    stopAnimation() {
        this.animationState = 'idle';
    }

    // @TODO mobx no idea how this should be done properly
    // maybe autorun? how to dispose it?
    startPulseAnimation = reaction(
        () => this.value,
        () => {
            if (!this.isEmpty) {
                this.startAnimation('pulse');
            }
        },
    );
}
