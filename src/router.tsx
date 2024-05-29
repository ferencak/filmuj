import { createBrowserRouter } from 'react-router-dom'

import { Routes } from '@enums/routes'
import Favorites from '@screens/favorites'
import Home from '@screens/home'
import MovieDetail from '@screens/movie-detail'
import NotFound from '@screens/not-found'
import SearchResults from '@screens/search-results'

const router = createBrowserRouter([
  {
    path: Routes.Home,
    element: <Home />,
  },
  {
    path: Routes.Favorites,
    element: <Favorites />,
  },
  {
    path: Routes.SearchResults(":query"),
    element: <SearchResults />,
  },
  {
    path: Routes.MovieDetail(':id'),
    element: <MovieDetail />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
])

export default router
