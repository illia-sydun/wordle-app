import { KeyboardKey } from '@shared/types/KeyboardKey.ts';
import { action, computed, makeObservable, observable } from 'mobx';
import { KEYBOARD_KEY } from '@shared/constants/KeyboardKey.ts';
import { WordOfTheDay } from '@shared/types/Word.ts';
import { KeyStore } from '@shared/stores/KeyboardStore/KeyStore.ts';
import {
    MobXRootStore,
    MobxStore,
} from '@shared/stores/RootStore/RootStore.ts';

type Keyboard = {
    keys: Record<KeyboardKey, KeyStore>;
};

export class KeyboardStore implements MobxStore, Keyboard {
    @observable accessor rootStore: MobXRootStore;

    @observable accessor keys: Keyboard['keys'];

    // @TODO mobx init and reset are overcomplicated.
    //  why create new stores all the time? just reset the states..
    constructor(rootStore: MobXRootStore) {
        this.rootStore = rootStore;

        this.keys = this.reset();

        makeObservable(this);
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
