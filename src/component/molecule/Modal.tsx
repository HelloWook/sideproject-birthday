import React, { ReactNode } from 'react'
import styled from '@emotion/styled'

import Title from '../atoms/Title/Title'
import Lable from '../atoms/Label/Lable'
import Overlay from '../atoms/Overlay/Overlay'

interface ModalProps {
  title: string
  children: ReactNode
}

const ModalStyle = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: inset;
  width: 600px;
  height: 300px;
  position: relative;
  text-align: center;
`

function Modal({ title, children }: ModalProps) {
  return (
    <Overlay>
      <ModalStyle>
        <Title variant={'primary'}>{title}</Title>
        <Lable variant={'primary'}>{children}</Lable>
      </ModalStyle>
    </Overlay>
  )
}

export default Modal
