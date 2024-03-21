export const ANSWER_STATUS = {
    EMPTY: 'empty',
    ACTIVE: 'active',
    VALID: 'valid',
    INVALID: 'invalid',
    SUBMITTED: 'submitted',
} as const satisfies Record<string, string>;
