import type React from 'react'
import { type ReactNode, forwardRef } from 'react'

import type { DynamicProps } from '@styles/dynamicStyles'
import { Relative } from '@styles/globals'
import { Field, Icon } from './style'

export interface TextFieldProps
  extends React.InputHTMLAttributes<HTMLDivElement> {
  icon?: ReactNode
}

const TextField = forwardRef<HTMLDivElement, TextFieldProps & DynamicProps>(
  (props, ref): JSX.Element => {
    return (
      <Relative ref={ref}>
        <Icon>{props.icon}</Icon>
        <Field {...props} />
      </Relative>
    )
  }
)

TextField.displayName = 'TextField'
export default TextField
