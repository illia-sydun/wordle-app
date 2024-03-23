export {};

// @TODO it might not be needed at all if I opt to use haptics only
declare global {
    interface Navigator {
        webkitVibrate?: Navigator['vibrate'];
        mozVibrate?: Navigator['vibrate'];
        msVibrate?: Navigator['vibrate'];
    }
}
