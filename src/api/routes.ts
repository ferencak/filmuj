export enum ApiRoutes {
  SEARCH_MOVIES_BY_NAME = '?s=',
  SEARCH_MOVIE_BY_ID = '?i=',
}

export const makeUrl = (
  route: ApiRoutes,
  query: string,
  includeWildcard = false
): string => `${route}${encodeURIComponent(query)}${includeWildcard ? '*' : ''}`
