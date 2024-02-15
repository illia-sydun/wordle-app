import { BoardGridRow } from './BoardGridRow';
import styles from './BoardGrid.module.scss';
import type { KeyboardKey } from '@shared/types/KeyboardKey.ts';
import { useGameStore } from '@shared/stores/GameStore/useGameStore.ts';

export const BoardGrid = () => {
    const {
        state: { answers, wordOfTheDay, gameStartedAt },
        computed: { indexOfCurrentAnswer, indexOfCurrentAnswerActiveCell },
    } = useGameStore();

    // @TODO resetting with key? hmmm...
    return (
        <div key={gameStartedAt} className={styles.container}>
            {answers.map((answer, i) => {
                return (
                    <BoardGridRow
                        isActive={i === indexOfCurrentAnswer}
                        indexOfActiveCell={indexOfCurrentAnswerActiveCell}
                        key={i}
                        answer={answer}
                        word={wordOfTheDay.word.split('') as KeyboardKey[]}
                    />
                );
            })}
        </div>
    );
};
