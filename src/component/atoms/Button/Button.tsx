import styled from '@emotion/styled'
import React, { ReactNode } from 'react'

type ButtonProps = {
  variant: string
  children: ReactNode
  clickEvent: React.MouseEventHandler<HTMLButtonElement>
}

const ButtonStyled = styled.button`
  border-radius: 8px;
  background-size: 10px 10px;
  font-size: 1.6rem;
  font-family: 'Ownglyph_UNZ-Rg';
  padding: 0.2rem 0.8rem 0.2rem 0.8rem;
  &.primary {
    background-color: #c28bf5;
    width: 120px;
  }
  &.capture {
    background-color: #ad5ef6;
    width: 140px;
  }
`

function Button({ variant, children, clickEvent }: ButtonProps) {
  return (
    <ButtonStyled onClick={clickEvent} className={`button ${variant}`}>
      {children}
    </ButtonStyled>
  )
}

export default Button
