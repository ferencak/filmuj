import type { FC, PropsWithChildren } from 'react'

import Header from '@components/Header'
import { Background, BackgroundWrapper, LayoutWrapper } from './style'

interface Props extends PropsWithChildren {
  imageUri: string
}

const MovieLayout: FC<Props> = ({ children, imageUri }): JSX.Element => (
  <BackgroundWrapper>
    <Background imageUri={imageUri} />
    <LayoutWrapper>
      <Header />
      {children}
    </LayoutWrapper>
  </BackgroundWrapper>
)

export default MovieLayout
