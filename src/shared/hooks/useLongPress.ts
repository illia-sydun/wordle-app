import { useState, useEffect, useCallback, useRef } from 'react';

interface LongPressHandlers {
    onMouseDown: () => void;
    onMouseUp: () => void;
    onTouchStart: () => void;
    onTouchEnd: () => void;
}

interface LongPressState {
    isLongPress: boolean;
}

const DEFAULT_LONG_PRESS_DURATION = 500; // in milliseconds
// @TODO added quickly, needs refactor

const useLongPress = (
    duration: number = DEFAULT_LONG_PRESS_DURATION,
): [LongPressHandlers, LongPressState] => {
    const [isLongPress, setIsLongPress] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const isPressing = useRef(false);

    const handleStart = useCallback(() => {
        timeoutRef.current = setTimeout(() => {
            setIsLongPress(true);
        }, duration);

        isPressing.current = true;
    }, [duration]);

    const handleEnd = useCallback(() => {
        if (isPressing.current) {
            clearTimeout(timeoutRef.current!);
            setIsLongPress(false);
            isPressing.current = false;
        }
    }, []);

    const handlers: LongPressHandlers = {
        onMouseDown: handleStart,
        onMouseUp: handleEnd,
        onTouchStart: handleStart,
        onTouchEnd: handleEnd,
    };

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    return [handlers, { isLongPress }];
};

export default useLongPress;
