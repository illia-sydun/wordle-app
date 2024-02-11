import { createContext } from 'react';
import type { GameStoreProviderValue } from './GameStore.types.ts';
import { GAME_STORE_INITIAL_STATE } from './GameStore.constants.ts';

export const GameStoreContext = createContext<GameStoreProviderValue>({
    state: GAME_STORE_INITIAL_STATE,
    dispatch: () => GAME_STORE_INITIAL_STATE,
});
