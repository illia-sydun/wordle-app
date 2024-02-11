import { ReactNode, useMemo, useReducer } from 'react';
import { GAME_STORE_INITIAL_STATE } from './GameStore.constants.ts';
import { GameStoreReducer } from './GameStore.reducer.ts';
import { GameStoreContext } from './GameStore.context.ts';
import type { GameStoreProviderValue } from './GameStore.types.ts';

type Props = {
    children: ReactNode;
};

export const GameStoreProvider = ({ children }: Props) => {
    const [state, dispatch] = useReducer(
        GameStoreReducer,
        GAME_STORE_INITIAL_STATE,
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
