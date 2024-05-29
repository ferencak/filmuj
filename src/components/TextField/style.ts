import styled from 'styled-components'

import {type DynamicProps, applyDynamicStyles} from '@styles/dynamicStyles'
import {helpers} from '@theme/helpers'
import {theme} from '@theme/theme.config'
import type {TextFieldProps} from '.'

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 100%;
  width: ${theme.spacing.huge};
`

export const Field = styled.input<TextFieldProps & DynamicProps>`
  background-color: ${helpers.colorWithOpacity(
    theme.colors.gray.light,
    theme.opacity.tiny
  )};
  border: none;
  padding: ${theme.spacing.small} ${theme.spacing.medium};
  padding-left: ${(props) =>
    props.icon ? theme.spacing.huge : theme.spacing.medium};
  border-radius: ${theme.borderRadius.medium};
  outline: none;
  transition: all 0.3s;
  transition-timing-function: cubic-bezier(.54,-0.31,.38,1.31);
  color: ${theme.colors.white};
  width: 20rem;


  &::placeholder {
    color: ${theme.colors.gray.light};
  }

  &:focus {
    background-color: ${helpers.colorWithOpacity(
      theme.colors.gray.light,
      theme.opacity.low
    )};
    width: 22rem;
  }

  ${(props) => applyDynamicStyles(props)}
`
