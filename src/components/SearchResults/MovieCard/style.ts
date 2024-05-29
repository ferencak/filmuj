import styled from 'styled-components'

import Image from '@components/Image'
import {type DynamicProps, applyDynamicStyles} from '@styles/dynamicStyles'
import {helpers} from '@theme/helpers'
import {theme} from '@theme/theme.config'

export const MovieTitle = styled.h3`
  font-size: .9rem;
  font-weight: 600;
  margin: 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  max-height: 3em;
  line-height: 1.3em;
  color: ${theme.colors.white};
  text-decoration: none;
`

export const MovieInfo = styled.span`
  font-size: .8rem;
  margin: 0;
  transition: all 0.3s ease-in-out;
  color: ${theme.colors.white};
`

export const Icon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.3rem;
  transition: all 0.3s ease-in-out;
  color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.medium};
  background-color: ${helpers.colorWithOpacity(
    theme.colors.gray.light,
    theme.opacity.medium
  )};
`

export const Tag = styled.span<DynamicProps>`
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0.3rem 0.5rem;
  text-transform: capitalize;
  width: fit-content;
  transition: all 0.3s ease-in-out;
  background-color: ${helpers.colorWithOpacity(
    theme.colors.white,
    theme.opacity.tiny
  )};
  color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.low};
  
  ${({...props}) => applyDynamicStyles(props)}
`

export const TagWithIcon = styled.div<DynamicProps>`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0rem 0.6rem 0rem 0rem;
  text-transform: capitalize;
  width: fit-content;
  transition: all 0.3s ease-in-out;
  border-radius: ${theme.borderRadius.low};
  background-color: ${helpers.colorWithOpacity(
    theme.colors.white,
    theme.opacity.tiny
  )};
  color: ${theme.colors.white};

  ${({...props}) => applyDynamicStyles(props)}
`

export const MoviePoster = styled(Image)`
  width: 3rem;
  height: 4rem;
  object-fit: cover;
  border-radius: ${theme.borderRadius.low};
`

export const MovieContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: .6rem;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  gap: 1rem;
  border-radius: ${theme.borderRadius.medium};

  &:hover {
    background-color: ${helpers.colorWithOpacity(
      theme.colors.primary,
      theme.opacity.full
    )};

    ${MovieInfo} {
      color: ${theme.colors.white};
    }

    ${TagWithIcon} {
      background-color: ${helpers.colorWithOpacity(
        theme.colors.dark,
        theme.opacity.medium
      )};
    }

    ${Icon} {
      background-color: ${helpers.colorWithOpacity(
        theme.colors.dark,
        theme.opacity.medium
      )};
    }
  }
`
