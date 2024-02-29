import { action, computed, observable } from 'mobx';
import { BoardRowStore } from '@shared/stores/BoardStore/BoardRowStore.ts';
import { MobxStore } from '@shared/stores/RootStore/RootStore.ts';

export type Board = {
    rows: BoardRowStore[];
};

export class BoardStore implements MobxStore, Board {
    @observable accessor rootStore: MobxStore['rootStore'];

    @observable accessor rows: Board['rows'];

    constructor(rootStore: MobxStore['rootStore']) {
        this.rootStore = rootStore;

        this.rows = this.reset();
    }

    @computed
    get isActiveRowValueUnique(): boolean {
        return !this.rows
            .filter((row) => row.isSubmitted)
            .some((row) => row.value === this.activeRow.value);
    }

    // @TODO mobx how to rename reset to init?
    //  how not to recreate all stores on reset?

    //  we need to update a few things only i guess
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

    private generateEmptyMatrix(rows = 6, columns = 5) {
        return Array.from({ length: rows }, () =>
            Array.from({ length: columns }, () => '' as const),
        );
    }
}
