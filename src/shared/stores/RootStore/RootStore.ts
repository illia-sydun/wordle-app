import { KeyboardStore } from '../KeyboardStore';
import { BoardStore } from '../BoardStore';
import { WordStore } from '../WordStore';
import { action } from 'mobx';
import { KeyboardKey } from '@shared/types/KeyboardKey.ts';

export type MobxStore = {
    rootStore: RootStore;
};

type Root = {
    keyboardStore: KeyboardStore;
    boardStore: BoardStore;
    wordStore: WordStore;
};

class RootStore implements Root {
    keyboardStore: KeyboardStore;
    boardStore: BoardStore;
    wordStore: WordStore;

    constructor() {
        this.keyboardStore = new KeyboardStore(this);
        this.boardStore = new BoardStore(this);
        this.wordStore = new WordStore(this);
    }

    @action
    reset() {
        const { word } = this.wordStore.reset();
        this.boardStore.reset();
        this.keyboardStore.init(word);
    }

    @action.bound
    handleKeyPress(key: KeyboardKey) {
        if (!this.keyboardStore.keys[key]) {
            return;
        }

        this.keyboardStore.keys[key].startAnimation('click');

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

        if (key === 'escape') {
            this.reset();
            return;
        }

        if (key === 'enter') {
            if (
                !this.boardStore.activeRow.canBeSubmitted ||
                !this.boardStore.isActiveRowValueUnique
            ) {
                this.boardStore.activeRow.setStatus('invalid');
                return;
            }

            const isWordExistsInDictionary =
                this.wordStore.checkIfWordExistsInDictionary(
                    this.boardStore.activeRow.value,
                );

            if (!isWordExistsInDictionary) {
                this.boardStore.activeRow.setStatus('invalid');
                return;
            }

            this.boardStore.activeRow.setStatus('submitted');
        }
    }
}

export const rootStore = new RootStore();
