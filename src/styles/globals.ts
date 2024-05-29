import styled from 'styled-components'
import {type DynamicProps, applyDynamicStyles} from './dynamicStyles'

export const Row = styled.div<DynamicProps>`
  display: flex;
  flex-direction: row;
  ${({...props}) => applyDynamicStyles(props)}
`

export const Column = styled.div<DynamicProps>`
  display: flex;
  flex-direction: column;
  ${({...props}) => applyDynamicStyles(props)}
`

export const Gap = styled.div<DynamicProps & {size: number}>`
  display: flex;
  flex-direction: inherit;
  gap: ${({size}) => size}rem;
  ${({...props}) => applyDynamicStyles(props)}
`

export const Absolute = styled.div<DynamicProps>`
  position: absolute;
  ${({...props}) => applyDynamicStyles(props)}
`

export const Relative = styled.div<DynamicProps>`
  position: relative;
  ${({...props}) => applyDynamicStyles(props)}
`
