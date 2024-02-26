import { KeyboardStore } from '../KeyboardStore';
import { BoardStore } from '../BoardStore';
import { WordStore } from '../WordStore';
import { configure } from 'mobx';

configure({
    enforceActions: 'always',
    computedRequiresReaction: true,
    reactionRequiresObservable: true,
    observableRequiresReaction: true,
    disableErrorBoundaries: true,
});

export type MobxStore = {
    rootStore: RootStore;
};

export type MobXRootStore = {
    keyboardStore: KeyboardStore;
    boardStore: BoardStore;
    wordStore: WordStore;
};

class RootStore implements MobXRootStore {
    keyboardStore: KeyboardStore;
    boardStore: BoardStore;
    wordStore: WordStore;

    constructor() {
        this.keyboardStore = new KeyboardStore(this);
        this.boardStore = new BoardStore(this);
        this.wordStore = new WordStore(this);
    }
}

export const rootStore = new RootStore();
