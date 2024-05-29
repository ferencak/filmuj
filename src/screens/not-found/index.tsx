import type { FC } from 'react'

import Button from '@components/Button'
import PageLayout from '@layouts/PageLayout'
import { Column } from '@styles/globals'
import { PageWrapper, Title } from './style'

const NotFound: FC = (): JSX.Element => {
  return (
    <PageLayout>
      <PageWrapper>
        <Column alignItems='center' gap={"2rem"}>
          <Title>Požadovaná stránka nebyla nalezena 😞</Title>
          <Button href="/" size="medium" variant='secondary'>
            Zpět na úvodní stránku
          </Button>
        </Column>
      </PageWrapper>
    </PageLayout>
  )
}

export default NotFound
