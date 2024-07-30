import styled from '@emotion/styled'
import React, { ReactNode } from 'react'

type ButtonProps = {
  variant: string
  children: ReactNode
  clickEvent: React.MouseEventHandler<HTMLButtonElement>
}

const ButtonStyled = styled.button`
  border-radius: 8px;
  background-color: #b570f6;
  background-image: radial-gradient(#fdd1ff 1px, transparent 1px);
  background-size: 10px 10px;
  font-size: 1.6rem;
  font-family: 'Ownglyph_UNZ-Rg';
  padding: 0.8rem;
`

function Button({ variant, children, clickEvent }: ButtonProps) {
  return (
    <ButtonStyled onClick={clickEvent} className={`button ${variant}`}>
      {children}
    </ButtonStyled>
  )
}

export default Button
