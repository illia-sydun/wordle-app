import { Haptics } from '@capacitor/haptics';
import { VIBRATION_PATTERN } from './vibrationService.constants.ts';
import { loggingService } from '../logging';

// @TODO rewrite it a bit
class VibrationService {
    private vibrateUsingCapacitorHapticsByDuration(duration: number = 0) {
        Haptics.vibrate({ duration }).catch(loggingService.error);
    }

    private vibrateUsingCapacitorHapticsByPattern(pattern: number[]) {
        pattern.reduce((acc, item, index, array) => {
            if (index !== 0 && index % 2 !== 0) {
                return acc + item;
            } else {
                setTimeout(() => {
                    this.vibrateUsingCapacitorHapticsByDuration(array[index]);
                }, acc);
                return acc;
            }
        }, 0);
    }

    // private vibrateUsingBrowserApi(pattern: number | number[] = 0) {
    //     const navigatorVibrate: Navigator['vibrate'] =
    //         navigator.vibrate ||
    //         navigator.webkitVibrate ||
    //         navigator.mozVibrate ||
    //         navigator.msVibrate;
    //
    //     if (navigatorVibrate) {
    //         navigatorVibrate.bind(navigator)(pattern);
    //     }
    // }

    vibrate(
        durationPatternOrPreset:
            | keyof typeof VIBRATION_PATTERN
            | number[]
            | number = 0,
    ) {
        if (
            typeof durationPatternOrPreset === 'string' &&
            VIBRATION_PATTERN[durationPatternOrPreset]
        ) {
            durationPatternOrPreset = VIBRATION_PATTERN[
                durationPatternOrPreset
            ] as number | number[];
        }

        if (
            typeof durationPatternOrPreset === 'object' &&
            Array.isArray(durationPatternOrPreset)
        ) {
            return this.vibrateUsingCapacitorHapticsByPattern(
                durationPatternOrPreset,
            );
        }

        if (
            typeof durationPatternOrPreset === 'number' &&
            Number.isSafeInteger(durationPatternOrPreset)
        ) {
            return this.vibrateUsingCapacitorHapticsByDuration(
                durationPatternOrPreset,
            );
        }

        throw Error(
            'Invalid vibration pattern:' +
                JSON.stringify(durationPatternOrPreset),
        );
    }
}

export const vibrationService = new VibrationService();
