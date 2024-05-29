import styled from 'styled-components'

import {helpers} from '@theme/helpers'
import {theme} from '@theme/theme.config'

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  width: 100%;
  height: 60vh;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;

  @media (max-width: 700px) {
    flex-direction: column-reverse;
    height: 100vh;
    align-items: start;
  }
`

export const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Heading = styled.h1`
  color: ${theme.colors.white};
  letter-spacing: ${theme.letterSpacing.heading};
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1.5em;
  width: 100%;
  text-align: left;
  text-transform: uppercase;
  margin: 0rem;
  z-index: 1;
`

export const SubHeading = styled.h2`
  color: ${helpers.colorWithOpacity(theme.colors.white, theme.opacity.high)};
  letter-spacing: 1px;
  font-size: 1em;
  font-weight: 400;
  line-height: 1.8em;
  width: 100%;
  text-align: left;
  margin: 0rem;
  z-index: 1;
  max-width: 80%;

  @media (max-width: 700px) {
    font-size: .9rem;
    line-height: 1.5em;
  }
`

export const Posters = styled.img`
  width: 40%;
  height: 50vh;
  object-fit: contain;
  text-align: right;

  @media (max-width: 700px) {
    width: 70vw;
    height: 30vh;
    opacity: 0.15;
    margin-bottom: -10rem;
    flex-grow: 0;
  }
`
