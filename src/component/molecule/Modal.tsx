import React, { ReactNode } from 'react'
import styled from '@emotion/styled'
import Title from '../atoms/Title/Title'
import Lable from '../atoms/Label/Lable'
import Overlay from '../atoms/Overlay/Overlay'

interface ModalProps {
  title: string
  children: ReactNode
}

const ModalStyled = styled.div`
  background: white;
  width: 600px;
  height: 300px;
  border-radius: 8px;
  box-shadow: inset;
  padding: 8px;
  position: relative;
  text-align: center;
`

function Modal({ title, children }: ModalProps) {
  return (
    <Overlay>
      <ModalStyled>
        <Title variant={'primary'}>{title}</Title>
        <Lable variant={'primary'}>{children}</Lable>
      </ModalStyled>
    </Overlay>
  )
}

export default Modal
