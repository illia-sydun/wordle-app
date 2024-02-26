import { KeyboardKey } from '@shared/types/KeyboardKey.ts';
import { action, computed, makeObservable, observable } from 'mobx';
import { WordOfTheDay } from '@shared/types/Word.ts';
import { BoardRowStore } from '@shared/stores/BoardStore/BoardRowStore.ts';
import {
    MobXRootStore,
    MobxStore,
} from '@shared/stores/RootStore/RootStore.ts';

export type Board = {
    rows: BoardRowStore[];
};

export class BoardStore implements MobxStore, Board {
    @observable accessor rootStore: MobXRootStore;

    @observable accessor rows: Board['rows'];

    constructor(rootStore: MobXRootStore) {
        this.rootStore = rootStore;

        this.rows = this.reset();

        makeObservable(this);
    }

    private generateEmptyMatrix(rows = 6, columns = 5) {
        return Array.from({ length: rows }, () =>
            Array.from(
                { length: columns },
                (): BoardRowStore['cells'][number]['value'] => '',
            ),
        );
    }

    @action
    reset() {
        const rows = this.generateEmptyMatrix().map(
            (row, index) => new BoardRowStore(this.rootStore, row, index),
        );

        this.rows = rows;

        return rows;
    }

    @computed
    get indexOfActiveRow() {
        const index = this.rows.findIndex((row) => !row.isSubmitted);
        const lastIndex = this.rows.length - 1;
        return index === -1 ? lastIndex : index;
    }

    @computed
    get activeRow(): Board['rows'][number] {
        return this.rows[this.indexOfActiveRow];
    }

    @computed
    get nextActiveRow() {
        return this.rows[this.indexOfActiveRow + 1];
    }

    @action
    submitActiveRow(word: WordOfTheDay['word']) {
        this.activeRow.setStatus('submitted', word);
    }

    @computed
    get isActiveRowUnique(): boolean {
        return !this.rows
            .filter((row) => row.isSubmitted)
            .some((row) => row.value === this.activeRow.value);
    }

    @action
    handleKeyPress(key: KeyboardKey) {
        console.log('handleKeyPress', key, this.activeRow);

        // @TODO mobx wordStore init doesn't work. circular dependency?
        // if (key === 'escape') {
        //     setTimeout(() => wordStore.reset(), 150);
        //     return;
        // }

        if (!this.rootStore.keyboardStore.keys[key].isClickable) {
            this.activeRow.activeCell.startAnimation('shake');
            this.rootStore.keyboardStore.keys[key].startAnimation('shake');
            return;
        }

        if (key.length === 1 && this.activeRow.cellToUpdateOnKeyPress) {
            this.activeRow.cellToUpdateOnKeyPress.setValue(key);
        }

        if (
            key === 'backspace' &&
            this.activeRow.cellToClearOnBackspaceKeyPress
        ) {
            this.activeRow.cellToClearOnBackspaceKeyPress.setValue('');
        }
    }
}
