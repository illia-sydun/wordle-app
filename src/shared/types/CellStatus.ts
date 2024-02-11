import { CELL_STATUS } from '@shared/constants/CellStatus.ts';

export type CellStatus = (typeof CELL_STATUS)[keyof typeof CELL_STATUS];
