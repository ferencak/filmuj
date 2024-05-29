import styled from 'styled-components'

import {helpers} from '@theme/helpers'
import {theme} from '@theme/theme.config'

export const SearchResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  padding: 0.5rem;
  gap: 0.3rem;
  background-color: ${helpers.colorWithOpacity(
    theme.colors.gray.dark,
    theme.opacity.full
  )};
  backdrop-filter: blur(20px);
  border-radius: 0 0 ${theme.borderRadius.medium} ${theme.borderRadius.medium};
  z-index: 3;
`

export const NotFoundText = styled.span`
  color: ${helpers.colorWithOpacity(theme.colors.white, theme.opacity.high)};
  font-size: .8em;
  font-weight: 500;
  margin: 0;
  width: 100%;
  text-align: center;
`
