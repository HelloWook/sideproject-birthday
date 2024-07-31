import styled from '@emotion/styled'
import React, { ReactNode } from 'react'

export interface TooltipProps {
  message: string
  children: ReactNode
}

const Container = styled.div`
  position: relative;
  display: inline-block;
`

const Content = styled.div`
  visibility: hidden;
  width: fit-content;
  background-color: rebeccapurple;
  color: #fff;
  text-align: center;
  border-radius: 5px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  bottom: 70%;
  left: 50%;
  transform: translate(-50%, 180%);
  opacity: 0;
  transition: opacity 0.3s;

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: rebeccapurple transparent transparent transparent;
  }
`

const ContainerHovered = styled(Container)`
  text-align: center;
  width: 100%;
  margin: auto;
  &:hover .tooltip-content,
  &:active .tooltip-content {
    visibility: visible;
    opacity: 1;
  }
`

const Tooltip = ({ children, message }: TooltipProps) => {
  return (
    <ContainerHovered>
      {children}
      <Content className={'tooltip-content'}>{message}</Content>
    </ContainerHovered>
  )
}

export default Tooltip
