import React, { ReactNode } from 'react'
import styled from '@emotion/styled'

const OverlayStyle = styled.div`
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

interface OverlayProps {
  children: ReactNode
}

function Overlay({ children }: OverlayProps) {
  return <OverlayStyle>{children}</OverlayStyle>
}

export default Overlay
