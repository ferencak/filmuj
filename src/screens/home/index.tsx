import type { FC } from 'react'

import Button from '@components/Button'
import PageLayout from '@layouts/PageLayout'
import { Column, Gap, Row } from '@styles/globals'
import { Heading, HeroWrapper, Posters, SubHeading } from './style'


const Home: FC = (): JSX.Element => (
  <PageLayout>
    <HeroWrapper>
      <Column flex={1}>
        <Gap size={2}>
          <Gap size={0.5}>
            <Heading>Co dnes sledovat? 🤔</Heading>
            <SubHeading>
              <b>
                Chcete tipy na filmy a seriály, které by vás mohly zaujmout?
              </b>{' '}
              Stačí si vybrat své preference a my vám nabídneme výběr titulů,
              které si můžete prohlédnout.
            </SubHeading>
          </Gap>
          <Row>
            <Gap size={1}>
              <Button variant="primary" size='medium' textTransform="uppercase">
                Prémium - 99 Kč/měsíc
              </Button>
              <Button variant="secondary" size='medium'>
                Vyzkoušet zdarma
              </Button>
            </Gap>
          </Row>
        </Gap>
      </Column>
      <Posters src="/images/posters_large.png" alt="Poster" />
    </HeroWrapper>
  </PageLayout>
)

export default Home
