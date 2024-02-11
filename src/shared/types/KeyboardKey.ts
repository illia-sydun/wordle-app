import { KEYBOARD_KEY } from '@shared/constants/KeyboardKey.ts';

export type KeyboardKey = (typeof KEYBOARD_KEY)[keyof typeof KEYBOARD_KEY];
