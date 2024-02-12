import { createContext } from 'react';
import type { GameStoreProviderValue } from './GameStore.types.ts';
import { getGameStoreInitialState } from './GameStore.reducer.ts';

export const GameStoreContext = createContext<GameStoreProviderValue>({
    state: getGameStoreInitialState(),
    dispatch: () => getGameStoreInitialState,
});
