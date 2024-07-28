import styled from '@emotion/styled'
import React, { ReactNode } from 'react'

export interface LableProps {
  variant: 'primary' | 'secondary'
  children: ReactNode
}

const PrimarySpan = styled.span`
  color: black;
`
function Lable({ variant, children }: LableProps) {
  return <PrimarySpan className={`lable ${variant}`}>{children}</PrimarySpan>
}

export default Lable
