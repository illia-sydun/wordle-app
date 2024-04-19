import { MdOutlineRestartAlt } from 'react-icons/md';
import { observer } from 'mobx-react-lite';
import { useMobxStore } from '@shared/stores/useMobxStore.ts';
import styles from './RestartButton.module.scss';

export const RestartButton = observer(() => {
    const { reset } = useMobxStore();

    const handleRestartButtonClick = () => {
        reset();
    };

    return (
        <div className={styles.container} onClick={handleRestartButtonClick}>
            <MdOutlineRestartAlt />
        </div>
    );
});
