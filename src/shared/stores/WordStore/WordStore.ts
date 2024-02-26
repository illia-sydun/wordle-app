import { WordOfTheDay } from '@shared/types/Word.ts';
import { action, makeObservable, observable } from 'mobx';
import { WORD_DICTIONARY } from '@shared/constants/Word.ts';
import { MobXRootStore } from '@shared/stores/RootStore/RootStore.ts';

type Word = {
    word: WordOfTheDay['word'];
    hints: WordOfTheDay['hints'];
};

export class WordStore implements Word {
    @observable accessor rootStore: MobXRootStore;

    @observable accessor word: Word['word'];
    @observable accessor hints: Word['hints'];

    constructor(rootStore: MobXRootStore) {
        this.rootStore = rootStore;

        const { word, hints } = this.reset();

        this.word = word;
        this.hints = hints;

        makeObservable(this);
    }

    // @TODO mobx not sure if this should be here or level higher.
    // theres no reason to use constructor in this implementation
    @action
    reset(): Word {
        const { word, hints } =
            WORD_DICTIONARY[
                Math.ceil(Math.random() * WORD_DICTIONARY.length - 1)
            ];

        if (word.length === 5) {
            this.rootStore.boardStore.reset();
            this.rootStore.keyboardStore.init(word);

            this.word = word;
            this.hints = hints;

            return { word, hints };
        } else {
            return this.reset();
        }
    }

    @action
    checkIfWordExistsInDictionary(word: string) {
        return WORD_DICTIONARY.some(
            (wordDictionary) => word === wordDictionary.word,
        );
    }
}
