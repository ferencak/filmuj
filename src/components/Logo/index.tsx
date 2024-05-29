import type { FC } from 'react'
import { Link } from 'react-router-dom'

import { Routes } from '@enums/routes'
import { LogoImage } from './style'

const Logo: FC = (): JSX.Element => (
  <Link to={Routes.Home}>
    <LogoImage src='/images/logo.png' />
  </Link>
)

export default Logo
