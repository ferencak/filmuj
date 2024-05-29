import type { FC } from 'react'
import { Link } from 'react-router-dom'
import { useRecoilValue } from 'recoil'

import { Routes } from '@enums/routes'
import PageLayout from '@layouts/PageLayout'
import { favoriteMoviesState } from '@store/favoriteMovies'
import { Column, Row } from '@styles/globals'
import {
  ItemsGrid,
  Movie,
  MoviePoster,
  MovieTitle,
  PageWrapper,
  Tag,
  Title,
} from './style'

const Favorites: FC = (): JSX.Element => {
  const movies = useRecoilValue(favoriteMoviesState)

  return (
    <PageLayout>
      <PageWrapper>
        <Column gap={'2rem'} width={'100%'}>
          <Title>Vaše oblíbené filmy ({movies.length})</Title>
          <ItemsGrid>
            {movies.map((movie) => (
              <Link
                state={{
                  from: Routes.Favorites
                }}
                to={Routes.MovieDetail(movie.imdbID)}
                key={movie.imdbID}
              >
                <Movie>
                  <MoviePoster src={movie.Poster} alt={movie.Title} />
                  <MovieTitle>{movie.Title}</MovieTitle>
                  <Row alignItems='center' gap={".5rem"}>
                    <Tag>{movie.Year}</Tag>
                    <Tag>{movie.Type}</Tag>
                  </Row>
                </Movie>
              </Link>
            ))}
          </ItemsGrid>
        </Column>
      </PageWrapper>
    </PageLayout>
  )
}

export default Favorites
