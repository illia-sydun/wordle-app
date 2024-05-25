import { useState, useCallback, TouchEvent, MouseEvent } from 'react';

interface SwipeHandlers {
    onTouchStart: (event: TouchEvent) => void;
    onTouchEnd: (event: TouchEvent) => void;
    onMouseDown: (event: MouseEvent) => void;
    onMouseUp: (event: MouseEvent) => void;
}

interface SwipeState {
    startX: number | null;
    startY: number | null;
}

interface SwipeProps {
    swipeThreshold?: number;
    onSwipeLeft?: () => void;
    onSwipeRight?: () => void;
    onSwipeUp?: () => void;
    onSwipeDown?: () => void;
}

const useSwipe = ({
    swipeThreshold = 50,
    onSwipeLeft,
    onSwipeRight,
    onSwipeUp,
    onSwipeDown,
}: SwipeProps = {}): [SwipeHandlers, SwipeState] => {
    const [startX, setStartX] = useState<number | null>(null);
    const [startY, setStartY] = useState<number | null>(null);

    const handleSwipe = useCallback(
        (endX: number, endY: number) => {
            if (!startX || !startY) return;

            const deltaX = endX - startX;
            const deltaY = endY - startY;

            if (Math.abs(deltaX) > Math.abs(deltaY)) {
                if (Math.abs(deltaX) > swipeThreshold) {
                    if (deltaX > 0 && onSwipeRight) {
                        onSwipeRight();
                    } else if (deltaX < 0 && onSwipeLeft) {
                        onSwipeLeft();
                    }
                }
            } else {
                if (Math.abs(deltaY) > swipeThreshold) {
                    if (deltaY > 0 && onSwipeDown) {
                        onSwipeDown();
                    } else if (deltaY < 0 && onSwipeUp) {
                        onSwipeUp();
                    }
                }
            }

            setStartX(null);
            setStartY(null);
        },
        [startX, startY, onSwipeLeft, onSwipeRight, onSwipeUp, onSwipeDown],
    );

    const handleTouchStart = useCallback((event: TouchEvent) => {
        setStartX(event.touches[0].clientX);
        setStartY(event.touches[0].clientY);
    }, []);

    const handleTouchEnd = useCallback(
        (event: TouchEvent) => {
            const endX = event.changedTouches[0].clientX;
            const endY = event.changedTouches[0].clientY;

            handleSwipe(endX, endY);
        },
        [
            startX,
            startY,
            swipeThreshold,
            onSwipeLeft,
            onSwipeRight,
            onSwipeUp,
            onSwipeDown,
        ],
    );

    const handleMouseDown = useCallback((event: MouseEvent) => {
        setStartX(event.clientX);
        setStartY(event.clientY);
    }, []);

    const handleMouseUp = useCallback(
        (event: MouseEvent) => {
            const endX = event.clientX;
            const endY = event.clientY;

            handleSwipe(endX, endY);
        },
        [
            startX,
            startY,
            swipeThreshold,
            onSwipeLeft,
            onSwipeRight,
            onSwipeUp,
            onSwipeDown,
        ],
    );

    const handlers: SwipeHandlers = {
        onTouchStart: handleTouchStart,
        onTouchEnd: handleTouchEnd,
        onMouseDown: handleMouseDown,
        onMouseUp: handleMouseUp,
    };

    const state: SwipeState = {
        startX,
        startY,
    };

    return [handlers, state];
};

export default useSwipe;
