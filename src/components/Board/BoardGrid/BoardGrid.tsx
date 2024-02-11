import { BoardGridRow } from './BoardGridRow';
import styles from './BoardGrid.module.scss';
import { KeyboardKey } from '@shared/types/KeyboardKey.ts';
import { WORD } from '../../../views/GameView/useWord.ts';

type BoardGridProps = {
    answers: KeyboardKey[][];
    currentIndex: number;
};

export const BoardGrid = ({ answers, currentIndex }: BoardGridProps) => {
    const { word } = WORD;

    return (
        <div className={styles.container}>
            {answers.map((answer, i) => {
                const isActive = currentIndex === i;
                const isSubmitted = !isActive && !!answers[i].at(-1);
                return (
                    <BoardGridRow
                        key={i}
                        answer={answer}
                        word={word.split('') as KeyboardKey[]}
                        isSubmitted={isSubmitted}
                        isActive={isActive}
                    />
                );
            })}
        </div>
    );
};
