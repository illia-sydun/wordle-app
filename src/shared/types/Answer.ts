import { KeyboardKey } from '@shared/types/KeyboardKey.ts';
import { ANSWER_STATUS } from '@shared/constants/AnswerStatus.ts';

export type AnswerStatus = (typeof ANSWER_STATUS)[keyof typeof ANSWER_STATUS];

export type Answer = {
    value: KeyboardKey[];
    status: AnswerStatus;
};
