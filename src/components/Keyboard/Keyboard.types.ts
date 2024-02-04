import { KEYBOARD_KEYS } from './Keyboard.constants.ts';

export type KeyboardKeys = typeof KEYBOARD_KEYS;
export type KeyboardKey = KeyboardKeys[number][number];
