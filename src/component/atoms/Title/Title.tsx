import styled from '@emotion/styled'
import React, { ReactNode } from 'react'

export interface TitleProps {
  variant: 'primary' | 'secondary'
  children: ReactNode
}

const PrimaryTitle = styled.h1`
  margin-top: 3rem;
  color: black;
  font-size: 3rem;

  font-size: 3rem;

  text-align: center;
`

function Title({ variant, children }: TitleProps) {
  return (
    <PrimaryTitle className={`title ${variant}`}>
      {'🎂'}
      {children}
    </PrimaryTitle>
  )
}

export default Title
