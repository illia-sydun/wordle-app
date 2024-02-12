import { WORD_DICTIONARY } from '@shared/constants/Word.ts';

export type WordDictionary = typeof WORD_DICTIONARY;

export type WordOfTheDay = WordDictionary[number];
