import { BoardGridCell } from './BoardGridCell';
import styles from './BoardGridRow.module.scss';
import { KeyboardKey } from '@shared/types/KeyboardKey.ts';
import { CellStatus } from '@shared/types/CellStatus.ts';
import { Answer } from '@shared/types/Answer.ts';

type BoardGridRowProps = {
    answer: Answer;
    word: KeyboardKey[];
    isActive: boolean;
};
export const BoardGridRow = ({ answer, word, isActive }: BoardGridRowProps) => {
    const getStatus = (i: number): CellStatus => {
        if (answer.isSubmitted) {
            if (word[i] === answer.value[i]) {
                return 'match';
            }
            if (word.includes(answer.value[i])) {
                return 'close_match';
            }
            if (answer.value[i]) {
                return 'no_match';
            }
        }

        return 'empty';
    };

    const getIsActive = (i: number) => {
        return (
            isActive &&
            !answer.isSubmitted &&
            answer.value.indexOf('' as KeyboardKey) === i
        );
    };

    return (
        <div className={styles.container}>
            {answer.value.map((value, i) => {
                return (
                    <BoardGridCell
                        count={i}
                        key={i}
                        value={value}
                        status={getStatus(i)}
                        isActive={getIsActive(i)}
                        isSubmitted={answer.isSubmitted}
                    />
                );
            })}
        </div>
    );
};
