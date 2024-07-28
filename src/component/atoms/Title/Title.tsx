import styled from '@emotion/styled'
import React, { ReactNode } from 'react'

export interface TitleProps {
  variant: 'primary' | 'secondary'
  children: ReactNode
}

const PrimaryTitle = styled.h1`
  color: black;
  font-size: 32px;
  text-align: center;
`

function Title({ variant, children }: TitleProps) {
  return <PrimaryTitle className={`title ${variant}`}>{children}</PrimaryTitle>
}

export default Title
