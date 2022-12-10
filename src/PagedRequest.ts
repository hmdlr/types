import { Request } from 'express';
import { PagedResults } from './PagedResults';
import { SortDirection } from './SortDirection';

/**
 * Builds a PagedResults object from the request.
 * @param req The request.
 * Accepted query parameters: <br />
 * ***pageNumber***: The page number. <br />
 * ***pageSize***: The page size. <br />
 * ***sortBy***: The column to sort by. Should be (keyof T) array, separated by comma.
 * If a string is not part of the type's keys, it will just be discarded.  <br />
 * ***sortDir***: The direction to sort by. Should be SortDirection array, separated by comma  <br />
 */
export function buildPagedResults<T>(
  req?: Request<unknown, unknown, unknown, {
    pageNumber?: number; pageSize?: number; sortBy?: string; sortDir?: string;
  }>
): PagedResults<T>;
export function buildPagedResults<T>({
  query: {
    pageNumber,
    pageSize,
    sortBy,
    sortDir,
  },
} :
{
  query?: {
    pageNumber?: number;
    pageSize?: number;
    sortBy?: string;
    sortDir?: string;
  } }): PagedResults<T>;

export function buildPagedResults<T>(
  reqOrOpts?: Request<unknown, unknown, unknown, {
    pageNumber?: number; pageSize?: number; sortBy?: string; sortDir?: string;
  }> | {
    query?: {
      pageNumber?: number;
      pageSize?: number;
      sortBy?: string;
      sortDir?: string;
    } }
): PagedResults<T> {
  const pagedResults = new PagedResults<T>();

  pagedResults.pageNumber = parseInt(reqOrOpts?.query?.pageNumber?.toString() ?? '1', 10);
  pagedResults.pageSize = parseInt(reqOrOpts?.query?.pageSize?.toString() ?? '50', 10);
  const sortBy = reqOrOpts?.query?.sortBy?.split(',') ?? [];
  const sortDir = reqOrOpts?.query?.sortDir?.split(',')
    ?.map(
      (dir) => (dir.toLowerCase() === 'desc' ? SortDirection.Desc : SortDirection.Asc)
    ) ?? [];
  pagedResults.sort(sortBy as (keyof T)[], sortDir);
  return pagedResults;
}
