import React, { useRef, useCallback } from 'react'
import Webcam from 'react-webcam'
import styled from '@emotion/styled'
import confetti from 'canvas-confetti'
import Camera from '../../atoms/WebCam/Camera'
import Button from '../../atoms/Button/Button'

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
        downloadImage(url, 'capture.jpg')

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

  const dataURItoBlob = (dataURI: string) => {
    const byteString = atob(dataURI.split(',')[1])
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]
    const ab = new ArrayBuffer(byteString.length)
    const ia = new Uint8Array(ab)
    for (let i = 0; i < byteString.length; i += 1) {
      ia[i] = byteString.charCodeAt(i)
    }
    return new Blob([ab], { type: mimeString })
  }

  const downloadImage = (url: string, filename: string) => {
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    a.click()
    URL.revokeObjectURL(url)
  }

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
