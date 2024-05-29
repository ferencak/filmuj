import {Link} from 'react-router-dom'
import styled from 'styled-components'

import {helpers} from '@theme/helpers'
import {theme} from '@theme/theme.config'
import type {Props} from '.'

export const StyledLink = styled(Link)<Props>`
  text-decoration: none;
  width: ${({width}) => width};
`

const getColor = (variant: string) => {
  switch (variant) {
    case 'primary':
      return theme.colors.white
    case 'secondary':
      return theme.colors.white
    case 'ghost':
      return theme.colors.white
    case 'link':
      return theme.colors.gray.light
    default:
      return theme.colors.white
  }
}

const getBackgroundColor = (variant: string) => {
  switch (variant) {
    case 'primary':
      return helpers.colorWithOpacity(theme.colors.primary, theme.opacity.full)
    case 'secondary':
      return helpers.colorWithOpacity(
        theme.colors.gray.light,
        theme.opacity.low
      )
    case 'ghost':
      return helpers.colorWithOpacity(
        theme.colors.gray.light,
        theme.opacity.tiny
      )
    case 'link':
      return 'transparent'
    default:
      return helpers.colorWithOpacity(theme.colors.primary, theme.opacity.full)
  }
}

const getHoverBackgroundColor = (variant: string) => {
  switch (variant) {
    case 'primary':
      return helpers.colorWithOpacity(theme.colors.primary, theme.opacity.high)
    case 'secondary':
      return helpers.colorWithOpacity(
        theme.colors.gray.light,
        theme.opacity.medium
      )
    case 'ghost':
      return helpers.colorWithOpacity(
        theme.colors.gray.light,
        theme.opacity.low
      )
    case 'link':
      return 'transparent'
    default:
      return helpers.colorWithOpacity(theme.colors.primary, theme.opacity.high)
  }
}

const getPadding = (size: string, variant: string) => {
  if (variant === 'link') return '0'

  switch (size) {
    case 'small':
      return '0.5rem 0.5rem'
    case 'medium':
      return '1rem 2rem'
    case 'large':
      return '1.5rem 3rem'
    default:
      return '1rem 2rem'
  }
}

export const StyledButton = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: ${({width}) => width};
  background-color: ${({variant}) => getBackgroundColor(variant || 'primary')};
  text-transform: ${({textTransform}) => textTransform};
  font-weight: 500;
  color: ${({variant}) => getColor(variant || 'primary')};
  padding: ${({size, variant}) =>
    getPadding(size || 'large', variant || 'primary')};
  border-radius: ${theme.borderRadius.low};
  border: none;
  cursor: pointer;
  transition: ease-in-out 150ms;

  &:hover {
    background-color: ${({variant}) =>
      getHoverBackgroundColor(variant || 'primary')};
    color: white;
  }
`
