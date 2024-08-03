import React, { useRef, useCallback } from 'react'
import Webcam from 'react-webcam'
import styled from '@emotion/styled'
import confetti from 'canvas-confetti'
import Camera from '../../atoms/WebCam/Camera'
import Button from '../../atoms/Button/Button'
import dataURItoBlob from '../../../util/dataURLtoBlob'
import downloadImage from '../../../util/downloadImage'

const CaptureStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Capture: React.FC = () => {
  const webcamRef = useRef<Webcam | null>(null)

  const capture = useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot()
      if (imageSrc) {
        const blob = dataURItoBlob(imageSrc)
        const url = URL.createObjectURL(blob)
        downloadImage(url, '오늘의 주인공!.jpg')
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { x: 0, y: 0.6 },
        })
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { x: 1, y: 0.6 },
        })
      }
    }
  }, [webcamRef])

  return (
    <CaptureStyled>
      <Camera ref={webcamRef} width={640} height={480} />
      <Button variant={'capture'} clickEvent={capture}>
        {'촬영'}
      </Button>
    </CaptureStyled>
  )
}

export default Capture
