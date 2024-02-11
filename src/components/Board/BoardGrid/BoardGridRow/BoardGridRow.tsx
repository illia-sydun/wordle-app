import { BoardGridCell } from './BoardGridCell';
import styles from './BoardGridRow.module.scss';
import { KeyboardKey } from '@shared/types/KeyboardKey.ts';
import { CellStatus } from '@shared/types/CellStatus.ts';

type BoardGridRowProps = {
    answer: KeyboardKey[];
    word: KeyboardKey[];
    isSubmitted: boolean;
    isActive: boolean;
};
export const BoardGridRow = ({
    answer,
    word,
    isSubmitted,
    isActive,
}: BoardGridRowProps) => {
    const getStatus = (i: number): CellStatus => {
        if (isSubmitted) {
            if (word[i] === answer[i]) {
                return 'match';
            }
            if (word.includes(answer[i])) {
                return 'close_match';
            }
            if (answer[i]) {
                return 'no_match';
            }
        }

        return 'empty';
    };

    const getIsActive = (i: number) => {
        return (
            isActive && !isSubmitted && answer.indexOf('' as KeyboardKey) === i
        );
    };

    return (
        <div className={styles.container}>
            {answer.map((value, i) => {
                return (
                    <BoardGridCell
                        count={i}
                        key={i}
                        value={value}
                        status={getStatus(i)}
                        isActive={getIsActive(i)}
                        isSubmitted={isSubmitted}
                    />
                );
            })}
        </div>
    );
};
