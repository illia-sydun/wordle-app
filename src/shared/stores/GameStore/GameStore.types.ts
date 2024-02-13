import { Dispatch } from 'react';
import type { Answer } from '@shared/types/Answer.ts';
import type { WordOfTheDay, WordDictionary } from '@shared/types/Word.ts';
import { KeyboardKey } from '@shared/types/KeyboardKey.ts';

type KeyState = Record<
    KeyboardKey,
    {
        column: number;
        found: boolean;
        visited: boolean;
    }
>;

export type GameStoreState = {
    keyState: KeyState;
    wordDictionary: WordDictionary;
    wordOfTheDay: WordOfTheDay;
    answers: Answer[];
    gameStartedAt: number;
};

export type GameStoreAction =
    | {
          type: 'UPDATE_ANSWER_VALUE';
          payload: {
              index: number;
              value: GameStoreState['answers'][number]['value'];
          };
      }
    | {
          type: 'UPDATE_ANSWER_STATUS';
          payload: {
              index: number;
              status: GameStoreState['answers'][number]['status'];
          };
      }
    | { type: 'SET_WORD_OF_THE_DAY'; payload: GameStoreState['wordOfTheDay'] }
    | { type: 'RESET' };

export type GameStoreProviderValue = {
    state: GameStoreState;
    dispatch: Dispatch<GameStoreAction>;
};
