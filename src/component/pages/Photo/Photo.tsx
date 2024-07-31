import React, { useRef } from 'react'
import Webcam from 'react-webcam'
import Title from '../../atoms/Title/Title'

function Photo() {
  const webcamRef = useRef(null)

  return (
    <>
      <Title variant={'primary'}>{'사진 촬영!'}</Title>
      <Webcam ref={webcamRef} screenshotFormat={'image/jpeg'} width={640} height={480} />
    </>
  )
}

export default Photo
