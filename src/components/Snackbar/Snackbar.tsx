// import { useRef } from 'react';
// import { Toast } from 'primereact/toast';

import styles from './Snackbar.module.scss';
import { observer } from 'mobx-react-lite';
import { useMobxStore } from '@shared/stores/useMobxStore.ts';
import { clsx } from 'clsx';
import { useEffect, useState } from 'react';
import useSwipe from '@shared/hooks/useSwipe.ts';
import { SnackbarStore } from '@shared/stores/SnackbarStore';
import { FaChevronLeft } from 'react-icons/fa';
// @TODO added quickly, needs refactor

export const Snackbar = observer(() => {
    const {
        snackbarsStore: { visibleSnackbars },
    } = useMobxStore();

    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                {visibleSnackbars.map((snackbar) => (
                    <SingleSnackbar key={snackbar.id} snackbar={snackbar} />
                ))}
            </div>
        </div>
    );
});
// @TODO added quickly, needs refactor

type Props = { snackbar: SnackbarStore };

const SingleSnackbar = observer(({ snackbar }: Props) => {
    const [isClosing, setIsClosing] = useState<boolean>(false);

    const onClose = () => {
        setIsClosing(true);
    };

    useEffect(() => {
        if (isClosing || snackbar.expired) {
            setTimeout(snackbar.close, 300);
        }
    }, [isClosing, snackbar.expired]);

    const [handlers] = useSwipe({
        swipeThreshold: 50,
        onSwipeLeft: () => {
            onClose();
        },
    });

    return (
        <div
            key={snackbar.id}
            className={clsx(
                styles.snackbar,
                (isClosing || snackbar.expired) && styles.closing,
                styles[snackbar.type],
            )}
            {...handlers}
        >
            {snackbar.title}
            <div aria-label='close' onClick={onClose} className={styles.close}>
                <FaChevronLeft />
            </div>
            {snackbar.onClick && <button onClick={snackbar.click}>Y</button>}
        </div>
    );
});
