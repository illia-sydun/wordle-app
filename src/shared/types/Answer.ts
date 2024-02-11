import { KeyboardKey } from '@shared/types/KeyboardKey.ts';

export type Answer = {
    value: KeyboardKey[];
    isSubmitted: boolean;
};
