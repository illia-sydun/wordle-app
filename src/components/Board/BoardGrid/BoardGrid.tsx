import { BoardGridRow } from './BoardGridRow';
import styles from './BoardGrid.module.scss';
import type { KeyboardKey } from '@shared/types/KeyboardKey.ts';
import { useGameStore } from '@shared/stores/GameStore/useGameStore.ts';

export const BoardGrid = () => {
    const {
        state: { answers, wordOfTheDay, gameStartedAt },
    } = useGameStore();

    // @TODO resetting with key? hmmm...
    return (
        <div key={gameStartedAt} className={styles.container}>
            {answers.map((answer, i) => {
                return (
                    <BoardGridRow
                        key={i}
                        answer={answer}
                        word={wordOfTheDay.word.split('') as KeyboardKey[]}
                    />
                );
            })}
        </div>
    );
};
