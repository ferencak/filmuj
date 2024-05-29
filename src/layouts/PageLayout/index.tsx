import type { FC, PropsWithChildren } from 'react'

import Header from '@components/Header'
import { BackgroundWrapper, LayoutWrapper } from './style'

export interface Props extends PropsWithChildren {
  height?: string
}

const PageLayout: FC<Props> = ({ height, children }): JSX.Element => (
  <BackgroundWrapper height={height}>
    <LayoutWrapper>
      <Header />
      {children}
    </LayoutWrapper>
  </BackgroundWrapper>
)

export default PageLayout
