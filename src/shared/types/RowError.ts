import { ROW_ERROR } from '@shared/constants/RowError.ts';
// @TODO added quickly

export type RowError = (typeof ROW_ERROR)[keyof typeof ROW_ERROR];
