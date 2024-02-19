import { KeyboardKey } from '@shared/types/KeyboardKey.ts';
import { action, observable } from 'mobx';
import { KEYBOARD_KEY } from '@shared/constants/KeyboardKey.ts';
import { WordOfTheDay } from '@shared/types/Word.ts';
import { KeyStore } from '@shared/stores/KeyboardStore/KeyStore.ts';

type Keyboard = {
    keys: Record<KeyboardKey, KeyStore>;
};

class KeyboardStore implements Keyboard {
    @observable accessor keys: Keyboard['keys'];

    // @TODO mobx init and reset are overcomplicated.
    //  why create new stores all the time? just reset the states..
    constructor() {
        this.keys = this.reset();
    }

    @action
    reset() {
        const keys = Object.values(KEYBOARD_KEY).reduce(
            (acc, item) => ({ ...acc, [item]: new KeyStore(item) }),
            {} as Keyboard['keys'],
        );

        this.keys = keys;

        return keys;
    }

    @action
    init(word: WordOfTheDay['word']) {
        this.reset();

        Array.from(word).forEach((char, i) => {
            this.keys[char as KeyboardKey].init(i);
        });
    }
}

export const keyboardStore = new KeyboardStore();
