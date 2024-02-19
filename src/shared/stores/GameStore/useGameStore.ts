import { useContext, useMemo } from 'react';
import { GameStoreContext } from './GameStore.context.ts';

export const useGameStore = () => {
    const { state, dispatch } = useContext(GameStoreContext);

    const stringifiedAnswers = JSON.stringify(state.answers);

    // done in mobx
    const indexOfCurrentAnswer = useMemo(() => {
        const index = state.answers.findIndex(
            (answer) => answer.status !== 'submitted',
        );
        const lastIndex = state.answers.length - 1;
        return index === -1 ? lastIndex : index;
    }, [stringifiedAnswers]);

    // done in mobx
    const currentAnswer = useMemo(() => {
        const answer = { ...state.answers[indexOfCurrentAnswer] };
        const lastAnswer = { ...state.answers[state.answers.length - 1] };
        return answer || lastAnswer;
    }, [stringifiedAnswers]);

    const stringifiedCurrentAnswer = JSON.stringify(currentAnswer);

    // done in mobx
    const indexOfCurrentAnswerActiveCell = useMemo(() => {
        const index = (currentAnswer?.value || []).findIndex(
            (character) => !character,
        );
        const lastIndex = currentAnswer.value.length - 1;
        return index === -1 ? lastIndex : index;
    }, [stringifiedCurrentAnswer]);

    const isGameOver =
        !currentAnswer ||
        state.answers[state.answers.length - 1].status === 'submitted';

    const computed = useMemo(
        () => ({
            indexOfCurrentAnswer,
            indexOfCurrentAnswerActiveCell,
            currentAnswer,
            isGameOver,
        }),
        [
            indexOfCurrentAnswer,
            currentAnswer,
            isGameOver,
            indexOfCurrentAnswerActiveCell,
        ],
    );

    return {
        state,
        computed,
        dispatch,
    };
};
