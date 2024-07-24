import styled from '@emotion/styled'
import React, { FC, ReactNode } from 'react'

export interface LableProps {
  variant: 'primary' | 'secondary'
  children: ReactNode
}

const PrimarySpan = styled.span`
  font-size: 20px;
  color: rebeccapurple;
`

const Lable: FC<LableProps> = ({ variant, children }) => {
  return <PrimarySpan className={`lable ${variant}`}>{children}</PrimarySpan>
}

export default Lable
