import { WordOfTheDay } from '@shared/types/Word.ts';
import { action, observable } from 'mobx';
import { WORD_DICTIONARY } from '@shared/constants/Word.ts';
import { MobxStore } from '@shared/stores/RootStore';

type Word = {
    word: WordOfTheDay['word'];
    hints: WordOfTheDay['hints'];
};

export class WordStore implements MobxStore, Word {
    @observable accessor rootStore: MobxStore['rootStore'];

    @observable accessor word: Word['word'];
    @observable accessor hints: Word['hints'];

    constructor(rootStore: MobxStore['rootStore']) {
        this.rootStore = rootStore;

        const { word, hints } = this.reset();

        this.word = word;
        this.hints = hints;
    }

    @action
    reset(): Word {
        const { word, hints } =
            WORD_DICTIONARY[
                Math.ceil(Math.random() * WORD_DICTIONARY.length - 1)
            ];

        // @TODO move 5 somewhere to env or to the store
        if (word.length === 5) {
            this.word = word;
            this.hints = hints;

            return { word, hints };
        } else {
            throw Error(`Check "${word}" word in dictionary`);
        }
    }

    @action
    checkIfWordExistsInDictionary(word: string) {
        return WORD_DICTIONARY.some(
            (wordDictionary) => word === wordDictionary.word,
        );
    }
}
