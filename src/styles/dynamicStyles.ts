import type {CSSProperties} from 'react'

const camelToKebab = (str: string): string =>
  str.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`)

const isCSSProperty = (prop: string): prop is keyof CSSProperties => {
  return prop in document.createElement('div').style
}

export interface DynamicProps extends CSSProperties {}

export const applyDynamicStyles = (props: CSSProperties) =>
  Object.keys(props)
    .filter(isCSSProperty)
    .map((key) => `${camelToKebab(key)}: ${props[key as keyof CSSProperties]};`)
    .join(' ')
