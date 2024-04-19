import { KeyboardKey } from '@shared/types/KeyboardKey.ts';
import { useCallback, useEffect } from 'react';

// @TODO track if it clears listener on each render
export const useKeyPress = (
    callback: (event: KeyboardEvent, key: KeyboardKey) => void,
    keys: KeyboardKey[],
) => {
    const onKeyDown = useCallback(
        (event: KeyboardEvent) => {
            // @TODO ts
            // @ts-expect-error poor sentry integration
            if (event.target?.id === 'sentry-feedback') {
                return false;
            }
            const key = event.key.toLowerCase() as KeyboardKey;
            const isWantedKeyPressed = keys.some(
                (key) => key === key.toLowerCase(),
            );
            if (isWantedKeyPressed) {
                event.preventDefault();
                event.stopPropagation();
                callback(event, key);
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
