export const Routes = {
  Home: '/',
  Favorites: '/favorites',
  NotFound: '/not-found',
  SearchResults: (query: string) => `/search-results/${query}`,
  MovieDetail: (id: string) => `/movie/${id}`,
}
