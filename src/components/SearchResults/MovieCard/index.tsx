import { Calendar, Notepad2 } from 'iconsax-react'
import type { FC } from 'react'
import { Link } from 'react-router-dom'

import { Routes } from '@enums/routes'
import type { Movie } from '@interfaces/movie'
import { Column, Row } from '@styles/globals'
import { getImageWithRes } from '@utils/getImageWithRes'
import {
  Icon,
  MovieContainer,
  MovieInfo,
  MoviePoster,
  MovieTitle,
  TagWithIcon,
} from './style'

interface Props extends Movie {
  searchValue: string
}

export const MovieCard: FC<Props> = ({
  Poster,
  Title,
  Year,
  Type,
  imdbID,
  searchValue,
}): JSX.Element => {
  return (
    <Link
      to={Routes.MovieDetail(imdbID)}
      state={{
        from: Routes.SearchResults(searchValue),
      }}
    >
      <MovieContainer>
        <MoviePoster
          src={
            Poster === 'N/A'
              ? '/images/poster_placeholder.png'
              : getImageWithRes(Poster, 100)
          }
          alt={Title}
        />
        <Column gap=".5rem">
          <MovieTitle>{Title}</MovieTitle>
          <Row alignItems="center" gap=".5rem">
            <TagWithIcon>
              <Icon>
                <Calendar size={14} variant="Bold" />
              </Icon>
              <MovieInfo>{Year}</MovieInfo>
            </TagWithIcon>
            <TagWithIcon>
              <Icon>
                <Notepad2 size={14} variant="Bold" />
              </Icon>
              <MovieInfo>{Type}</MovieInfo>
            </TagWithIcon>
          </Row>
        </Column>
      </MovieContainer>
    </Link>
  )
}
