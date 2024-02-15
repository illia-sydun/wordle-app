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
    isActive: boolean;
    indexOfActiveCell: number;
};
export const BoardGridRow = ({
    answer,
    word,
    isActive,
    indexOfActiveCell,
}: BoardGridRowProps) => {
    const shakeAnimationState = useBooleanState();

    const isInvalidAnswer = answer.status === 'invalid';

    useEffect(() => {
        if (isInvalidAnswer) {
            shakeAnimationState.handleSetValue(true);
        }
    }, [isInvalidAnswer]);

    // @TODO type
    const handleAnimationEnd = (e) => {
        shakeAnimationState.handleSetFalse();

        e.target.setAttribute('data-is-shaking-animation', 'false');
    };

    // @TODO extract to hook
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
        return isActive && i === indexOfActiveCell && !answer.value[i];
    };

    return (
        <div
            className={styles.container}
            data-is-shaking-animation={shakeAnimationState.value}
            onAnimationEnd={handleAnimationEnd}
            data-is-active-board-grid-row={isActive}>
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
