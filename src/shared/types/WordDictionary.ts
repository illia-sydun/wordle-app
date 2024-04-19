import { WORD_DICTIONARY } from '@shared/constants/WordDictionary.ts';

export type WordDictionaryEntry = {
    word: string;
    hints: {
        id: `${string}-hint-${number}`;
        label: string;
    }[];
};

export type WordDictionary = typeof WORD_DICTIONARY;

export type WordOfTheDay = WordDictionary[number];
