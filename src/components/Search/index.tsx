import { GlobalSearch } from 'iconsax-react'
import { type FC, useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'
import { useRecoilState } from 'recoil'
import useSWRImmutable from 'swr/immutable'
import { useDebounce } from 'use-debounce'

import { ApiRoutes, makeUrl } from '@api/routes'
import SearchResults from '@components/SearchResults'
import TextField from '@components/TextField'
import { useOnClickOutside } from '@hooks/useOutsideClick'
import type { Movie } from '@interfaces/movie'
import type { Response } from '@interfaces/response'
import { moviesState } from '@store/movies'
import { searchState } from '@store/search'
import { helpers } from '@theme/helpers'
import { theme } from '@theme/theme.config'
import { fetcher } from '@utils/fetcher'
import { SearchWrapper } from './style'

const Search: FC = (): JSX.Element => {
  const location = useLocation()
  const [searchValue, setSearchValue] = useRecoilState(searchState)
  const [debouncedSearchValue, { isPending }] = useDebounce(searchValue, 1000)
  const [isDropdownShown, setIsDropdownShown] = useState<boolean>(false)
  const searchRef = useRef<HTMLDivElement>(null)
  const [movies, setMovies] = useRecoilState(moviesState)
  const { data, isLoading } = useSWRImmutable<Response<Movie[]>>(
    debouncedSearchValue.length > 0
      ? makeUrl(
        ApiRoutes.SEARCH_MOVIES_BY_NAME,
        debouncedSearchValue.trim(),
        true
      )
      : null,
    fetcher
  )
  useOnClickOutside(searchRef, () =>
    setIsDropdownShown(false)
  )

  // biome-ignore lint/correctness/useExhaustiveDependencies: Run effect only when location changes
  useEffect(() => {
    setIsDropdownShown(false)
  }, [location])

  // biome-ignore lint/correctness/useExhaustiveDependencies: Run effect only when data changes
  useEffect(() => {
    if (
      isLoading ||
      data?.Response === 'False' ||
      !data?.Search ||
      data?.Search?.length === 0
    ) return setMovies([])

    setMovies(data?.Search)
  }, [data])

  const handleSearchValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.trim().length < 1) setMovies([])
    setSearchValue(e.target.value)
  }

  const isDataReady = debouncedSearchValue.length > 0 && !isLoading && !isPending()

  return (
    <SearchWrapper>
      <TextField
        icon={
          !isLoading && !isPending() ? (
            <GlobalSearch
              size={18}
              variant="Bulk"
              color={helpers.colorWithOpacity(
                theme.colors.white,
                theme.opacity.high
              )}
            />
          ) : (
            <ClipLoader
              size={18}
              color={helpers.colorWithOpacity(
                theme.colors.white,
                theme.opacity.medium
              )}
            />
          )
        }
        type="text"
        placeholder="Vyhledejte film nebo seriál ..."
        defaultValue={searchValue}
        onChange={handleSearchValueChange}
        borderRadius={
          isDataReady && isDropdownShown
            ? '.5rem .5rem 0 0'
            : theme.borderRadius.medium
        }
        onFocus={() => setIsDropdownShown(true)}
        onClick={() => setIsDropdownShown(true)}
      />
      {isDropdownShown && (
        <SearchResults ref={searchRef} searchValue={debouncedSearchValue} isDataReady={isDataReady} />
      )}
    </SearchWrapper>
  )
}

export default Search
