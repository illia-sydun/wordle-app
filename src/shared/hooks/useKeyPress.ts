import { KeyboardKey } from '@shared/types/KeyboardKey.ts';
import { useCallback, useEffect } from 'react';

// @TODO track if it clears listener on each render
// fix any
export const useKeyPress = (
    callback: (event: KeyboardEvent, key: KeyboardKey) => void,
    keys: KeyboardKey[],
) => {
    const onKeyDown = useCallback(
        (event: KeyboardEvent) => {
            const isWantedKeyPressed = keys.some(
                (key) => event.key.toLowerCase() === key.toLowerCase(),
            );
            if (isWantedKeyPressed) {
                callback(event, event.key.toLowerCase() as KeyboardKey);
            }
        },
        [callback, keys],
    );

    useEffect(() => {
        document.addEventListener('keydown', onKeyDown);

        return () => {
            document.removeEventListener('keydown', onKeyDown);
        };
    }, [onKeyDown]);
};
