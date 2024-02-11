import { useContext, useMemo } from 'react';
import { GameStoreContext } from './GameStore.context.ts';

export const useGameStore = () => {
    const { state, dispatch } = useContext(GameStoreContext);
    console.log(state);
    const indexOfCurrentAnswer = state.answers.findIndex(
        (answer) => !answer.isSubmitted,
    );
    const currentAnswer = state.answers[indexOfCurrentAnswer];

    const isGamePending = !!currentAnswer;

    const computed = useMemo(
        () => ({ indexOfCurrentAnswer, currentAnswer, isGamePending }),
        [indexOfCurrentAnswer, currentAnswer, isGamePending],
    );

    return {
        state,
        computed,
        dispatch,
    };
};
