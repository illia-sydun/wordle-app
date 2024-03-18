export const CELL_STATUS_SUBMITTED = {
    NO_MATCH: 'no_match',
    CLOSE_MATCH: 'close_match',
    MATCH: 'match',
} as const satisfies Record<string, string>;

export const CELL_STATUS = {
    ...CELL_STATUS_SUBMITTED,
    EMPTY: 'empty',
    TOUCHED: 'touched',
} as const satisfies Record<string, string>;
