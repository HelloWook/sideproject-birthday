import React, { ReactNode } from 'react'
import styled from '@emotion/styled'
import Title from '../../atoms/Title/Title'
import Lable from '../../atoms/Label/Lable'
import Overlay from '../../atoms/Overlay/Overlay'
import Button from '../../atoms/Button/Button'

interface ModalProps {
  title: string
  children: ReactNode
  clickEvent: React.MouseEventHandler<HTMLButtonElement>
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
  button {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
`

function Modal({ title, children, clickEvent }: ModalProps) {
  return (
    <Overlay>
      <ModalStyled>
        <Title variant={'primary'}>{title}</Title>
        <Lable variant={'primary'}>{children}</Lable>
        <Button variant={'primary'} clickEvent={clickEvent}>
          {'닫기'}
        </Button>
      </ModalStyled>
    </Overlay>
  )
}

export default Modal
