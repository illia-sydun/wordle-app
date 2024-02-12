import { BoardGridRow } from './BoardGridRow';
import styles from './BoardGrid.module.scss';
import type { KeyboardKey } from '@shared/types/KeyboardKey.ts';
import { useGameStore } from '@shared/stores/GameStore/useGameStore.ts';

export const BoardGrid = () => {
    const {
        state: { answers, wordOfTheDay },
        computed: { indexOfCurrentAnswer },
    } = useGameStore();

    return (
        <div className={styles.container}>
            {answers.map((answer, i) => {
                const isActive = indexOfCurrentAnswer === i;
                return (
                    <BoardGridRow
                        key={i}
                        answer={answer}
                        word={wordOfTheDay.word.split('') as KeyboardKey[]}
                        isActive={isActive}
                    />
                );
            })}
        </div>
    );
};
