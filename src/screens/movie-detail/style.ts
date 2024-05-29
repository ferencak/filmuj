import styled from 'styled-components'

import Image from '@components/Image'
import {helpers} from '@theme/helpers'
import {theme} from '@theme/theme.config'

export const MovieWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  width: 100%;
  height: 60vh;
  justify-content: start;
  align-items: start;
`

export const MoviePoster = styled(Image)`
  width: 21rem;
  height: 30rem;
  object-fit: cover;
  border-radius: ${theme.borderRadius.low};
  box-shadow: 0 0 200px -50px rgb(255 255 255 / 20%);

  @media (max-width: 768px) {
    display: none;
  }

  
`

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  line-height: 1;
  padding-bottom: .5rem;
  margin: 0;
  color: ${theme.colors.white};
`

export const Description = styled.p`
  font-size: 1em;
  max-width: 40rem;
  letter-spacing: 1px;
  margin: 0;
  color: ${theme.colors.white};
`

export const Actors = styled.span`
  font-size: 1em;
  line-height: 1.5;
  max-width: 40rem;
  letter-spacing: 1px;
  color: ${theme.colors.gray.light};
`

export const Rating = styled(Actors)``

export const Tag = styled.span`
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.3rem 0.5rem;
  text-transform: capitalize;
  width: fit-content;
  height: fit-content;
  transition: all 0.3s ease-in-out;
  background-color: ${helpers.colorWithOpacity(
    theme.colors.white,
    theme.opacity.tiny
  )};
  color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.low};
`

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
`
