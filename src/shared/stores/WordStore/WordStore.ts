import { WordOfTheDay } from '@shared/types/WordDictionary.ts';
import { action, observable } from 'mobx';
import { WORD_DICTIONARY } from '@shared/constants/WordDictionary.ts';
import { MobxStore } from '@shared/stores/RootStore';
import { WORD_VOCABULARY } from '@shared/constants/WordVocabulary.ts';
import { getRandomElementFromArray } from '@shared/helpers/getRandomElementFromArray.ts';

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
        // and maybe introduce zod for env after that
        if (word.length === 5) {
            this.word = word;
            this.hints = hints;
            // @TODO added quickly

            const messages: string[] = [
                `Alrighty then! Let's kick off this Wordle adventure with a brand new word. Click hint button on the top right corner when you get stuck, as I have ${hints.length} hints prepared.`,
                `Welcome to Wordle! Get ready for a brain-teasing challenge with a fresh word. Click hint button on the top right corner when you get stuck, as I have ${hints.length} hints prepared.`,
                `Alright, Wordle warrior! Here's a new word to get those gears turning. Click hint button on the top right corner when you get stuck, as I have ${hints.length} hints prepared.`,
                `Ready, set, Wordle! Time to tackle a new word and show off your word-smithery. Click hint button on the top right corner when you get stuck, as I have ${hints.length} hints prepared.`,
                `Game on! A new word awaits you, so let's dive into the Wordle fun. Click hint button on the top right corner when you get stuck, as I have ${hints.length} hints prepared.`,
                `Let the Wordle games begin! Here's a fresh word to get the excitement flowing. Click hint button on the top right corner when you get stuck, as I have ${hints.length} hints prepared.`,
                `Buckle up, Wordle wizard! A new word is here to test your linguistic prowess. Click hint button on the top right corner when you get stuck, as I have ${hints.length} hints prepared.`,
                `Welcome back, Wordle enthusiast! Let's start this round with a new mystery word. Click hint button on the top right corner when you get stuck, as I have ${hints.length} hints prepared.`,
                `Get set for some Wordle action! Here's a new word to challenge your word-finding skills. Click hint button on the top right corner when you get stuck, as I have ${hints.length} hints prepared.`,
                `Okay, let's Wordle! A fresh word is on the menu, so let the word-hunting begin. Click hint button on the top right corner when you get stuck, as I have ${hints.length} hints prepared.`,
            ];

            this.rootStore.snackbarsStore.openSnackbar({
                title: getRandomElementFromArray(messages),
                duration: 6000,
            });

            return { word, hints };
        } else {
            throw Error(`Check "${word}" word in dictionary`);
        }
    }

    @action
    checkIfWordExists(word: string) {
        const doesWordExistInVocabulary = WORD_VOCABULARY.some(
            (vocabularyWord) => word === vocabularyWord,
        );

        if (doesWordExistInVocabulary) {
            return true;
        }

        const doesWordExistInDictionary = WORD_DICTIONARY.some(
            (dictionaryEntry) => word === dictionaryEntry.word,
        );

        if (doesWordExistInDictionary) {
            return true;
        }

        return false;
    }
}
