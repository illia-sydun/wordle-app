import { ReactNode, useMemo, useReducer } from 'react';
import {
    GameStoreReducer,
    getGameStoreInitialState,
} from './GameStore.reducer.ts';
import { GameStoreContext } from './GameStore.context.ts';
import type { GameStoreProviderValue } from './GameStore.types.ts';

type Props = {
    children: ReactNode;
};

export const GameStoreProvider = ({ children }: Props) => {
    const [state, dispatch] = useReducer(
        GameStoreReducer,
        getGameStoreInitialState(),
    );

    const value: GameStoreProviderValue = useMemo(
        () => ({ state, dispatch }),
        [state, dispatch],
    );

    return (
        <GameStoreContext.Provider value={value}>
            {children}
        </GameStoreContext.Provider>
    );
};
