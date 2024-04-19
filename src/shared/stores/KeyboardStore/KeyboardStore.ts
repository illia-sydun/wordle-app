import { KeyboardKey } from '@shared/types/KeyboardKey.ts';
import { action, observable } from 'mobx';
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

        this.keys = this.reset(rootStore.wordStore.word);
    }

    @action
    reset(word: WordOfTheDay['word']) {
        const keys = Object.values(KEYBOARD_KEY).reduce(
            (acc, item) => ({
                ...acc,
                [item]: new KeyStore(this.rootStore, item),
            }),
            {} as Keyboard['keys'],
        );

        this.keys = keys;

        this.init(word);

        return keys;
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
