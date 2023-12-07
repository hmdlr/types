import Joi from 'joi';
import { PagedRequest } from '../PagedRequest';

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace hmdlrJoiSchemas {
  /**
   * The schema for the search query.
   */
  export const searchQuery = Joi.object<{
    query: string
  }>().keys({ query: Joi.string().required() });

  /**
   * The schema for the paged request.
   */
  export const pagedRequest = Joi.object<PagedRequest>().keys({
    pageNumber: Joi.number().integer().min(1),
    pageSize: Joi.number().integer(),
    sortBy: Joi.string(),
    sortDir: Joi.string(),
  });

  /**
   * The schema for the requested group.
   */
  export const withGroup = Joi.object<{
    fromGroup?: string
  }>().keys({ fromGroup: Joi.string() });
}
