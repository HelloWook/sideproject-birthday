import React, { useRef } from 'react'
import Webcam from 'react-webcam'
import Title from '../../atoms/Title/Title'
import Camera from '../../atoms/WebCam/Camera'

function Photo() {
  const webcamRef = useRef<Webcam | null>(null)

  return (
    <>
      <Title variant={'primary'}>{'사진 촬영!'}</Title>
      <Camera ref={webcamRef} width={640} height={480} />
    </>
  )
}

export default Photo
