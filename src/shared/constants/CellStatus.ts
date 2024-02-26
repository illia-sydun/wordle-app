export const CELL_STATUS_SUBMITTED = {
    NO_MATCH: 'no_match',
    CLOSE_MATCH: 'close_match',
    MATCH: 'match',
} as const;

export const CELL_STATUS = {
    EMPTY: 'empty',
    TOUCHED: 'touched',
    ...CELL_STATUS_SUBMITTED,
} as const;
