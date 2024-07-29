import React, { ReactNode } from 'react'
import styled from '@emotion/styled'

import Title from '../atoms/Title/Title'
import Lable from '../atoms/Label/Lable'

interface ModalProps {
  title: string
  children: ReactNode
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`

function Modal({ title, children }: ModalProps) {
  return (
    <Overlay>
      <Title variant={'primary'}>{title}</Title>
      <Lable variant={'primary'}>{children}</Lable>
    </Overlay>
  )
}

export default Modal
