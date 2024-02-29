import { ROW_STATUS } from '@shared/constants/RowStatus.ts';

export type RowStatus = (typeof ROW_STATUS)[keyof typeof ROW_STATUS];
