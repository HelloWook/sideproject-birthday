import React from 'react'
import Title from '../../atoms/Title/Title'
import Caputure from '../../molecule/Capture/Caputure'

function Photo() {
  return (
    <>
      <Title variant={'primary'}>{'사진 촬영!'}</Title>
      <Caputure />
    </>
  )
}

export default Photo
