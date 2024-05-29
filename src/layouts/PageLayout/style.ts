import styled from 'styled-components'

import type {Props} from '.'

export const BackgroundWrapper = styled.div<Props>`
  min-height: ${({height}) => height || '100vh'};
  height: 100%;
  width: 100%;
  background-image: url('/images/main_background.png');
  background-attachment: fixed;
  background-size: cover;
  display: flex;
`

export const LayoutWrapper = styled.div`
  max-width: 80rem;
  width: 100%;
  margin: 0 auto;
  padding: 2rem
`
