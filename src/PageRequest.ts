import { SortDirection } from './SortDirection';

export interface PageRequest<T> {
  pageNumber?: number;
  pageSize?: number;
  sortBy?: (keyof T)[];
  sortDir?: SortDirection[];
}
