export const ROW_ERROR = {
    WORD_ALREADY_SUBMITTED: 'word_already_submitted',
    WORD_DOESNT_EXIST: 'word_doesnt_exist',
    WORD_INCOMPLETE: 'word_incomplete',
} as const satisfies Record<string, string>;
