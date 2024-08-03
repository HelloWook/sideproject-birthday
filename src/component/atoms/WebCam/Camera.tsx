import styled from '@emotion/styled'
import React, { forwardRef } from 'react'
import Webcam from 'react-webcam'

interface WebcamComponentProps {
  width?: number
  height?: number
}

const CameraStyled = styled.div`
  display: block;
  margin-top: 3rem;
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
