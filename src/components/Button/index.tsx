import type { FC, ReactNode } from 'react'

import { StyledButton, StyledLink } from './style'

export interface Props {
  variant?: 'primary' | 'secondary' | 'ghost' | 'link'
  textTransform?: 'uppercase' | 'capitalize' | 'lowercase'
  size?: 'small' | 'medium' | 'large'
  children: string | ReactNode
  href?: string
  width?: string
  onClick?: () => void
}

const Button: FC<Props> = ({
  variant = 'primary',
  size,
  textTransform,
  children,
  width = 'fit-content',
  href,
  onClick,
}) => {
  if (href) {
    return (
      <StyledLink to={href} width={width}>
        <StyledButton
          width={width}
          variant={variant}
          size={size}
          textTransform={textTransform}
        >
          {children}
        </StyledButton>
      </StyledLink>
    )
  }

  return (
    <StyledButton
      variant={variant}
      size={size}
      onClick={onClick && onClick}
      textTransform={textTransform}
    >
      {children}
    </StyledButton>
  )
}

export default Button
