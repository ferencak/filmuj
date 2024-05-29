import type { FC, PropsWithChildren } from 'react'

import { Section, Tag } from '@screens/movie-detail/style'

interface Props extends PropsWithChildren {
  title?: string
}

const MovieDetailSection: FC<Props> = ({ children, title }): JSX.Element => (
  <Section>
    {title && <Tag>{title}</Tag>}
    {children}
  </Section>
)

export default MovieDetailSection