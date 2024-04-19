import { TbHelpCircle } from 'react-icons/tb';
import { observer } from 'mobx-react-lite';
import { useMobxStore } from '@shared/stores/useMobxStore.ts';
import { useState } from 'react';
import styles from './HintButton.module.scss';

// @TODO added quickly, needs refactor
export const HintButton = observer(() => {
    const [hintIndex, setHintIndex] = useState<number>(0);

    const {
        wordStore: { hints },
        snackbarsStore: { openSnackbar },
    } = useMobxStore();

    const updateHintIndex = () => {
        setHintIndex((hintIndex) => {
            if (hintIndex === hints.length - 1) {
                return 0;
            }
            return ++hintIndex;
        });
    };

    const openHintSnackbar = () => {
        openSnackbar({
            title: `Hint #${hintIndex + 1}: ${hints[hintIndex].label}`,
            duration: 5000,
            type: 'success',
        });
    };

    const handleHintButtonClick = () => {
        openHintSnackbar();
        updateHintIndex();
    };

    return (
        <div className={styles.container} onClick={handleHintButtonClick}>
            <TbHelpCircle />
        </div>
    );
});
