import { ArrowRight } from 'iconsax-react'
import { forwardRef } from 'react'
import { useRecoilValue } from 'recoil'

import Button from '@components/Button'
import { Routes } from '@enums/routes'
import { moviesState } from '@store/movies'
import { MovieCard } from './MovieCard'
import { NotFoundText, SearchResultsWrapper } from './style'

interface Props {
  searchValue: string
  isDataReady: boolean
}

const SearchResults = forwardRef<HTMLDivElement, Props>(
  (props, ref): JSX.Element | null => {
    const movies = useRecoilValue(moviesState)

    if (!props.isDataReady) return null
    const hasNoResults = movies.length === 0 && props.isDataReady;

    return (
      <SearchResultsWrapper ref={ref}>

        {hasNoResults &&
          <NotFoundText>Nebyly nalezeny žádné výsledky</NotFoundText>
        }

        {movies.map(
          (movie, index) =>
            index < 5 && <MovieCard key={movie.imdbID} {...movie} searchValue={props.searchValue} />
        )}

        {!hasNoResults && (
          <Button size="small" width='100%' variant="secondary" href={Routes.SearchResults(props.searchValue)}>
            Zobrazit vše
            <ArrowRight size={16} />
          </Button>
        )}
      </SearchResultsWrapper>
    )
  }
)

SearchResults.displayName = 'SearchResults'
export default SearchResults
