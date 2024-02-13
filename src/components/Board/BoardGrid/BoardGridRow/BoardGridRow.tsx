import { BoardGridCell } from './BoardGridCell';
import styles from './BoardGridRow.module.scss';
import { KeyboardKey } from '@shared/types/KeyboardKey.ts';
import { CellStatus } from '@shared/types/CellStatus.ts';
import { Answer } from '@shared/types/Answer.ts';
import { useBooleanState } from '@shared/hooks/useBooleanState.ts';
import { useEffect } from 'react';

type BoardGridRowProps = {
    answer: Answer;
    word: KeyboardKey[];
};
export const BoardGridRow = ({ answer, word }: BoardGridRowProps) => {
    const flipAnimationState = useBooleanState();

    const isInvalidAnswer = answer.status === 'invalid';

    useEffect(() => {
        if (isInvalidAnswer) {
            flipAnimationState.handleSetValue(true);
        }
    }, [isInvalidAnswer]);

    const handleEndAnimation = () => {
        flipAnimationState.handleSetFalse();
    };

    const getStatus = (i: number): CellStatus => {
        if (answer.status === 'submitted') {
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
            answer.status === 'active' &&
            answer.value.indexOf('' as KeyboardKey) === i
        );
    };

    return (
        <div
            className={styles.container}
            data-is-flipping-animation={flipAnimationState.value}
            onAnimationEnd={handleEndAnimation}>
            {answer.value.map((value, i) => {
                return (
                    <BoardGridCell
                        count={i}
                        key={i}
                        value={value}
                        status={getStatus(i)}
                        isActive={getIsActive(i)}
                        isSubmitted={answer.status === 'submitted'}
                    />
                );
            })}
        </div>
    );
};
