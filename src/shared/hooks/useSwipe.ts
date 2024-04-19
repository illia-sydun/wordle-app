import { useState, useCallback } from 'react';

interface SwipeHandlers {
    onTouchStart: (event: React.TouchEvent<HTMLDivElement>) => void;
    onTouchEnd: (event: React.TouchEvent<HTMLDivElement>) => void;
    onMouseDown: (event: React.MouseEvent<HTMLDivElement>) => void;
    onMouseUp: (event: React.MouseEvent<HTMLDivElement>) => void;
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
// @TODO added quickly, needs refactor

const useSwipe = ({
    swipeThreshold = 50,
    onSwipeLeft,
    onSwipeRight,
    onSwipeUp,
    onSwipeDown,
}: SwipeProps = {}): [SwipeHandlers, SwipeState] => {
    const [startX, setStartX] = useState<number | null>(null);
    const [startY, setStartY] = useState<number | null>(null);

    const handleTouchStart = useCallback(
        (event: React.TouchEvent<HTMLDivElement>) => {
            setStartX(event.touches[0].clientX);
            setStartY(event.touches[0].clientY);
        },
        [],
    );

    const handleTouchEnd = useCallback(
        (event: React.TouchEvent<HTMLDivElement>) => {
            if (!startX || !startY) return;

            const endX = event.changedTouches[0].clientX;
            const endY = event.changedTouches[0].clientY;

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

    const handleMouseDown = useCallback(
        (event: React.MouseEvent<HTMLDivElement>) => {
            setStartX(event.clientX);
            setStartY(event.clientY);
        },
        [],
    );

    const handleMouseUp = useCallback(
        (event: React.MouseEvent<HTMLDivElement>) => {
            if (!startX || !startY) return;

            const endX = event.clientX;
            const endY = event.clientY;

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
