import React, { FC, ReactNode } from 'react'

export interface LableProps {
  variant: 'primary' | 'secondary'
  children: ReactNode
}

const Lable: FC<LableProps> = ({ variant, children }) => {
  return <span className={`lable ${variant}`}>{children}</span>
}

export default Lable
