import { KeyboardKey } from '@shared/types/KeyboardKey.ts';
import { action, computed, observable } from 'mobx';
import { KEYBOARD_KEY } from '@shared/constants/KeyboardKey.ts';
import { WordOfTheDay } from '@shared/types/WordDictionary.ts';
import { KeyStore } from '@shared/stores/KeyboardStore/KeyStore.ts';
import { MobxStore } from '@shared/stores/RootStore/RootStore.ts';

type Keyboard = {
    keys: Record<KeyboardKey, KeyStore>;
};

export class KeyboardStore implements MobxStore, Keyboard {
    @observable accessor rootStore: MobxStore['rootStore'];

    @observable accessor keys: Keyboard['keys'];

    constructor(rootStore: MobxStore['rootStore']) {
        this.rootStore = rootStore;

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

    @computed
    get foundKeys() {
        return Object.values(this.keys)
            .filter((key) => key.state.submittedAtCell > -1)
            .sort((a, b) => a.state.submittedAtCell - b.state.submittedAtCell);
    }

    @action
    init(word: WordOfTheDay['word']) {
        const keys = Object.keys(this.keys) as KeyboardKey[];

        const matchedKeys = Array.from(word).reduce(
            (acc, key, matchedAtWordIndex) => {
                return {
                    ...acc,
                    [key]: matchedAtWordIndex,
                };
            },
            {} as Record<KeyboardKey, number>,
        );

        keys.forEach((key) => {
            const matchedAtWordIndex = matchedKeys[key];

            if (matchedAtWordIndex > -1) {
                this.keys[key].setState(matchedAtWordIndex);
            } else {
                this.keys[key].resetState();
            }
        });
    }
}
