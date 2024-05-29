import styled from 'styled-components'

import {theme} from '@theme/theme.config'

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  width: 100%;
  height: 60vh;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
`

export const Title = styled.h1`
  color: ${theme.colors.white};
  font-size: 1.5em;
  font-weight: 800;
  letter-spacing: ${theme.letterSpacing.heading};
  text-transform: uppercase;
  margin: 0;
  text-align: center;
`
