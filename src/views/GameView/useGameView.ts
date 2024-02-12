import { useCallback, useContext, useEffect } from 'react';
import { GameStoreContext } from '@shared/stores/GameStore/GameStore.context.ts';
import { WORD_DICTIONARY } from '@shared/constants/Word.ts';

export const useGameView = () => {
    const { state, dispatch } = useContext(GameStoreContext);

    const initWordOfTheDay = useCallback(() => {
        const wordOfTheDay =
            WORD_DICTIONARY[
                Math.ceil(Math.random() * WORD_DICTIONARY.length - 1)
            ];
        dispatch({ type: 'SET_WORD_OF_THE_DAY', payload: wordOfTheDay });
    }, [dispatch]);

    useEffect(() => {
        if (!state.gameStartedAt) {
            initWordOfTheDay();
        }
    }, [state.gameStartedAt]);
};
