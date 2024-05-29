import type { FC } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Link } from 'react-router-dom'
import useSWRInfinite from 'swr/infinite'

import { ApiRoutes } from '@api/routes'
import { Routes } from '@enums/routes'
import withParams from '@hoc/withParams'
import type { Movie as MovieType } from '@interfaces/movie'
import type { Response } from '@interfaces/response'
import PageLayout from '@layouts/PageLayout'
import { Column } from '@styles/globals'
import { fetcher } from '@utils/fetcher'
import {
  ItemsGrid,
  Movie,
  MoviePoster,
  MovieTitle,
  PageWrapper,
  Title,
} from './style'

interface Props {
  query: string
}

export const getKey = (
  query: string,
  pageIndex: number,
  previousPageData: Response<MovieType[]>
) => {
  if (previousPageData && !previousPageData.Search?.length) return null
  return `${ApiRoutes.SEARCH_MOVIES_BY_NAME}${encodeURIComponent(query)}*&page=${pageIndex + 1
    }`
}

const SearchResults: FC<Props> = ({ query }): JSX.Element => {
  const { data, isLoading, size, setSize } = useSWRInfinite<
    Response<MovieType[]>
  >(getKey.bind(null, query), fetcher, {
    revalidateFirstPage: false,
  })

  return (
    <PageLayout height='101vh'>
      <PageWrapper>
        <Column gap={'2rem'} width={'100%'}>
          <Title>Filmy s názvem - {query}</Title>

          {!isLoading && (
            <InfiniteScroll
              dataLength={
                data?.length ? Number(data?.length) * 10 : 0
              }
              next={() => setSize(size + 1)}
              hasMore={
                Number(data?.[0]?.totalResults) > size * 10
              }
              loader={<>&nbsp;</>}
              endMessage={<>&nbsp;</>}
            >
              <ItemsGrid>
                {data?.map((page) =>
                  page.Search?.map((movie) => (
                    <Link
                      state={{
                        from: Routes.SearchResults(query),
                      }}
                      to={Routes.MovieDetail(movie.imdbID)}
                      key={movie.imdbID}
                    >
                      <Movie>
                        <MoviePoster src={movie.Poster} alt={movie.Title} />
                        <MovieTitle>{movie.Title}</MovieTitle>
                      </Movie>
                    </Link>
                  ))
                )}
              </ItemsGrid>
            </InfiniteScroll>
          )}

        </Column>
      </PageWrapper>
    </PageLayout>
  )
}

export default withParams(SearchResults, ['query'])
