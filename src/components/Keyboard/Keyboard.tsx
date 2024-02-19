import styles from './Keyboard.module.scss';
import { KeyboardGrid } from './KeyboardGrid';
import { KEYBOARD_LAYOUT } from './Keyboard.constants.ts';
import { KeyboardKey } from '@shared/types/KeyboardKey.ts';
import { observer } from 'mobx-react-lite';
import { useMobxStores } from '@shared/stores/useMobx.ts';

// @TODO mobx + it needs refactor
// fix mobx wordStore word mess

export const Keyboard = observer(() => {
    const { keyboardStore, boardStore, wordStore } = useMobxStores();
    const handleKeyboardKeyPress = (keyboardKey: KeyboardKey) => {
        if (!keyboardStore.keys[keyboardKey]) {
            return;
        }

        keyboardStore.keys[keyboardKey].startAnimation('click');

        if (keyboardKey === 'escape') {
            // @TODO mobx thats a joke, but i wanted escape to animate
            // maybe show a dialog with confirmation first?
            // also move it somewhere else?
            setTimeout(() => wordStore.reset(), 150);
            return;
        }

        if (keyboardKey.length === 1 || keyboardKey === 'backspace') {
            boardStore.handleKeyPress(keyboardKey);
            return;
        }

        if (keyboardKey === 'enter') {
            if (!boardStore.activeRow.canBeSubmitted) {
                boardStore.activeRow.startAnimation('shake');
                return;
            }

            const isValidWordFromDictionary =
                wordStore.checkIfWordExistsInDictionary(
                    boardStore.activeRow.value,
                );

            const isValidAndUniqueWord =
                isValidWordFromDictionary && boardStore.isActiveRowUnique;

            if (isValidAndUniqueWord) {
                boardStore.submitActiveRow(wordStore.word);
            } else {
                boardStore.activeRow.setStatus('invalid');
            }
        }
    };

    return (
        <div className={styles.container}>
            <KeyboardGrid
                onKeyboardKeyPress={handleKeyboardKeyPress}
                keyboardLayout={KEYBOARD_LAYOUT}
            />
        </div>
    );
});
