import React, { useRef, useState } from 'react'
import Webcam from 'react-webcam'
import styled from '@emotion/styled'
import Camera from '../../atoms/WebCam/Camera'
import Button from '../../atoms/Button/Button'

function Caputure() {
  const [image, setImage] = useState<string | null>(null)

  const CaptuerStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `

  const capture = () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot()
      setImage(imageSrc)
      console.log(image)
    }
  }

  const webcamRef = useRef<Webcam | null>(null)
  return (
    <CaptuerStyled>
      <Camera ref={webcamRef} width={640} height={480} />
      <Button variant={'capture'} clickEvent={capture}>
        {'캡쳐'}
      </Button>
    </CaptuerStyled>
  )
}

export default Caputure
