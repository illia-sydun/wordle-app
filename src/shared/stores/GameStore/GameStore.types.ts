import { Dispatch } from 'react';
import type { Answer } from '@shared/types/Answer.ts';

export type GameStoreState = {
    answers: Answer[];
};

export type GameStoreAction =
    | {
          type: 'UPDATE_ANSWER';
          payload: { index: number; answer: Partial<Answer> };
      }
    | { type: 'RESET_ANSWERS' };

export type GameStoreProviderValue = {
    state: GameStoreState;
    dispatch: Dispatch<GameStoreAction>;
};
