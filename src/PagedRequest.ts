import { Request } from 'express';
import { PagedResults } from './PagedResults';
import { SortDirection } from './SortDirection';

export const buildPagedResults = <T>(req: Request): PagedResults<T> => {
  const pagedResults = new PagedResults<T>();
  pagedResults.pageNumber = Number(req.query.pageNumber) ?? 1;
  pagedResults.pageSize = Number(req.query.pageSize) ?? 50;
  const sortBy = (req.query.sortBy as string).split(',') ?? [];
  const sortDir = (req.query.sortDir as string).split(',')
    .map(
      (dir) => (dir.toLowerCase() === 'desc' ? SortDirection.Desc : SortDirection.Desc)
    ) ?? [];
  pagedResults.sort(sortBy as (keyof T)[], sortDir);
  return pagedResults;
};
