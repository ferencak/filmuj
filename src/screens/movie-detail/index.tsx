import { ArrowLeft, Star1 } from 'iconsax-react'
import type { FC } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import useSWR from 'swr'

import { ApiRoutes, makeUrl } from '@api/routes'
import Button from '@components/Button'
import Image from '@components/Image'
import MovieDetailSection from '@components/MovieDetailSection'
import { Routes } from '@enums/routes'
import withParams from '@hoc/withParams'
import type { Movie } from '@interfaces/movie'
import MovieLayout from '@layouts/MovieLayout'
import { favoriteMoviesState } from '@store/favoriteMovies'
import { Column, Row } from '@styles/globals'
import { fetcher } from '@utils/fetcher'
import { getImageByDevice, getImageWithRes } from '@utils/getImageWithRes'
import {
  Actors,
  Description,
  MoviePoster,
  MovieWrapper,
  Rating,
  Tag,
  Title,
} from './style'

interface Params {
  id: string
}

const MovieDetail: FC<Params> = ({ id }): JSX.Element => {
  const { state } = useLocation()
  const navigate = useNavigate()
  const [favoriteMovies, setFavoriteMovies] = useRecoilState(favoriteMoviesState)
  const { isLoading, data } = useSWR<Movie>(
    makeUrl(ApiRoutes.SEARCH_MOVIE_BY_ID, id),
    fetcher
  )

  const handleFavoriteClick = () => {
    setFavoriteMovies((prev) => {
      if (prev.find((movie) => movie.imdbID === data?.imdbID)) {
        return prev.filter((movie) => movie.imdbID !== data?.imdbID)
      }
      return [...prev, data] as Movie[]
    })
  }

  if (!isLoading && data?.Response === "False") {
    navigate(Routes.NotFound)
    return <></>
  }

  return (
    <MovieLayout imageUri={getImageByDevice(data?.Poster)}>
      <Column marginTop={"5rem"} gap={"2rem"}>
        {state?.from &&
          <Button variant="ghost" href={state.from} size='medium'>
            <ArrowLeft size={18} />
            Zpět na seznam
          </Button>
        }
        {!isLoading && (
          <MovieWrapper>
            <MoviePoster
              src={data?.Poster && getImageWithRes(data.Poster, 500)}
              alt={data?.Title}
              style={{
                backgroundImage: `url(${data?.Poster && getImageWithRes(data.Poster, 20)
                  })`,
                backgroundSize: 'cover',
              }}
            />
            <Column gap={'1.5rem'}>
              <MovieDetailSection>
                <Column>
                  <Title>
                    {data?.Title}{' '}
                    <Star1
                      size={32}
                      color={'#FFD700'}
                      style={{
                        cursor: 'pointer',
                      }}
                      variant={
                        favoriteMovies.find((movie) => movie.imdbID === data?.imdbID)
                          ? 'Bulk'
                          : 'Linear'
                      }
                      onClick={handleFavoriteClick}
                    />
                  </Title>
                  <Row alignItems="center" gap={'.5rem'}>
                    <Tag>{data?.Type}</Tag>
                    <Tag>{data?.Genre}</Tag>
                    <Tag>{data?.Released}</Tag>
                  </Row>
                </Column>
              </MovieDetailSection>
              <MovieDetailSection title="Popisek">
                <Description>{data?.Plot}</Description>
              </MovieDetailSection>
              <MovieDetailSection title="Obsazení">
                <Actors>{data?.Actors}</Actors>
              </MovieDetailSection>
              <MovieDetailSection title="Hodnocení">
                <Row gap={'.5rem'}>
                  <Image
                    src={'/icons/imdb.png'}
                    width={44}
                    alt={data?.Ratings[0]?.Value}
                  />
                  <Rating>{data?.imdbRating}</Rating>
                </Row>
              </MovieDetailSection>
            </Column>
          </MovieWrapper>
        )}
      </Column>
    </MovieLayout>
  )
}

export default withParams(MovieDetail, ['id'])
