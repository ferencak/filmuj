import {theme} from '@theme/theme.config'
import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  border-radius: ${theme.borderRadius.full};

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`
