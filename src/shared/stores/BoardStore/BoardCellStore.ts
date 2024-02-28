import { KeyboardKey } from '@shared/types/KeyboardKey.ts';
import { CellStatus } from '@shared/types/CellStatus.ts';
import { AnimationState } from '@shared/types/AnimationState.ts';
import { action, computed, observable } from 'mobx';
import { WordOfTheDay } from '@shared/types/Word.ts';
import { CELL_STATUS_SUBMITTED } from '@shared/constants/CellStatus.ts';
import {
    MobXRootStore,
    MobxStore,
} from '@shared/stores/RootStore/RootStore.ts';

type BoardCell = {
    index: number;
    rowIndex: number;
    value: KeyboardKey | '';
    status: CellStatus;
    animationState: AnimationState;
};

export class BoardCellStore implements MobxStore, BoardCell {
    @observable accessor rootStore: MobXRootStore;

    @observable accessor index: BoardCell['index'];
    @observable accessor rowIndex: BoardCell['rowIndex'];
    @observable accessor value: BoardCell['value'];
    @observable accessor status: BoardCell['status'];
    @observable accessor animationState: BoardCell['animationState'];

    constructor(
        rootStore: MobXRootStore,
        value: BoardCell['value'],
        index: BoardCell['index'],
        rowIndex: BoardCell['rowIndex'],
    ) {
        this.rootStore = rootStore;

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

    // @TODO mobx emmmm IDK, somehow fix redundant access to boardStore
    @computed
    get isActive() {
        return (
            this.rowIndex === this.rootStore.boardStore.indexOfActiveRow &&
            this.index === this.rootStore.boardStore.activeRow.indexOfActiveCell
        );
    }

    @computed
    get isSubmitted() {
        return Object.values(CELL_STATUS_SUBMITTED).some(
            (status) => status === this.status,
        );
    }

    @computed
    get animationDelay() {
        return this.index * 250;
    }

    @computed
    get transitionDelay() {
        return this.index * 300;
    }

    @computed
    get computedStyles() {
        if (this.isSubmitted) {
            return {
                transitionDelay: `${this.transitionDelay}ms`,
                animationDelay: `${this.animationDelay}ms`,
            };
        }
    }

    @action
    setValue(value: BoardCell['value']) {
        this.value = value;

        if (value) {
            this.setStatus('touched');
            this.startAnimation('pulse');
        } else {
            this.setStatus('empty');
        }
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
}
