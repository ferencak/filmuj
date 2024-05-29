import styled from 'styled-components'

import Image from '@components/Image'
import {helpers} from '@theme/helpers'
import {theme} from '@theme/theme.config'

export const Title = styled.h1`
  color: ${theme.colors.white};
  font-size: 1.5em;
  font-weight: 800;
  letter-spacing: ${theme.letterSpacing.heading};
  text-transform: uppercase;
  margin: 0;
`

export const MovieTitle = styled.h2`
  color: ${theme.colors.white};
  font-size: .9em;
  font-weight: 600;
  margin: 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  max-height: 3em;
`

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

export const ItemsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
  gap: 2rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
    gap: 1rem;
  }
`

export const Movie = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  height: 100%;
  align-items: start;
  padding: 1rem;
  background-color: ${helpers.colorWithOpacity(
    theme.colors.gray.light,
    theme.opacity.tiny
  )};
  border-radius: ${theme.borderRadius.medium};
  transition: all 150ms ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: ${helpers.colorWithOpacity(
      theme.colors.gray.light,
      theme.opacity.medium
    )};
  }
`

export const MoviePoster = styled(Image)`
  width: 100%;
  height: 15rem;
  object-size: 100% 100%;
  border-radius: ${theme.borderRadius.low};

  @media (max-width: 768px) {
    height: 10rem;
  }

  @media (max-width: 400px) {
    height: 18rem;
  }
`

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  width: 100%;
  align-items: start;
  margin-top: 5rem;

  @media (max-width: 700px) {
    align-items: start;
  }
`
