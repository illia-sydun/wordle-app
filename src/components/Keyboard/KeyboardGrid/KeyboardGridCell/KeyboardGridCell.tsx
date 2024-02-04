import styles from './KeyboardGridCell.module.scss';
import { KeyboardKey } from '../../Keyboard.types.ts';

type KeyboardGridCellProps = {
    value: KeyboardKey;
    onClick: (value: KeyboardGridCellProps['value']) => void;
};
export const KeyboardGridCell = ({ value, onClick }: KeyboardGridCellProps) => {
    const handleOnClick = () => {
        onClick(value);
    };

    return (
        <div
            className={styles.container}
            style={{ gridArea: value }}
            onClick={handleOnClick}>
            {value}
        </div>
    );
};
