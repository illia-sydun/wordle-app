import { WordOfTheDay } from '@shared/types/Word.ts';
import { action, observable } from 'mobx';
import { WORD_DICTIONARY } from '@shared/constants/Word.ts';
import { keyboardStore } from '@shared/stores/KeyboardStore/KeyboardStore.ts';
import { boardStore } from '@shared/stores/BoardStore/BoardStore.ts';

type Word = {
    word: WordOfTheDay['word'];
    hints: WordOfTheDay['hints'];
};

class WordStore implements Word {
    @observable accessor word: Word['word'];
    @observable accessor hints: Word['hints'];

    constructor() {
        const { word, hints } = this.reset();

        this.word = word;
        this.hints = hints;
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
            boardStore.reset();
            keyboardStore.init(word);

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

export const wordStore = new WordStore();
