import styled from '@emotion/styled'
import React, { forwardRef } from 'react'
import Webcam from 'react-webcam'

interface WebcamComponentProps {
  width?: number
  height?: number
}

const CameraStyled = styled.div`
  margin: auto;
  width: 100%;
  display: flex;
  justify-content: center;
`

const Camera = forwardRef<Webcam, WebcamComponentProps>(function Camera({ width, height }, ref) {
  return (
    <CameraStyled>
      <Webcam ref={ref} screenshotFormat={'image/jpeg'} width={width} height={height} />
    </CameraStyled>
  )
})

Camera.displayName = 'Camera'

Camera.defaultProps = {
  width: 640,
  height: 480,
}

export default Camera
