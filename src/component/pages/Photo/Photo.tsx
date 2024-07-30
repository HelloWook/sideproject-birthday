import React from 'react'
import Title from '../../atoms/Title/Title'
import Tooltip from '../../atoms/Tooltip/Tooltip'

function Photo() {
  return (
    <Tooltip message={'ㅎㅇ'}>
      <Title variant={'primary'}>{'사진 촬영!'}</Title>
    </Tooltip>
  )
}

export default Photo
