import type { FC } from 'react'
import { useRecoilValue } from 'recoil'

import Button from '@components/Button'
import Logo from '@components/Logo'
import Search from '@components/Search'
import { favoriteMoviesState } from '@store/favoriteMovies'
import { HeaderContent, HeaderWrapper } from './style'

const Header: FC = (): JSX.Element => {
  const movies = useRecoilValue(favoriteMoviesState)
  return (
    <HeaderWrapper>
      <Logo />
      <HeaderContent>
        <Button variant="link" href="/favorites">
          Oblíbené filmy ({movies.length})
        </Button>
        <Search />
      </HeaderContent>
    </HeaderWrapper>
  )
}

export default Header
