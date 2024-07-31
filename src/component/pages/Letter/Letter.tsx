import React, { useState } from 'react'
import Title from '../../atoms/Title/Title'
import Image from '../../atoms/Image/image'

function Letter() {
  const [isClicked, setIsClicked] = useState<boolean>(false)

  const handleClick = () => {
    setIsClicked((prev) => !prev)
    console.log(isClicked)
  }

  return (
    <div>
      <Title variant={'primary'}>{'감사한 마음을 전해보아요'}</Title>
      <Image url={'letter.png'} alt={'편지'} onClick={handleClick} />
    </div>
  )
}

export default Letter
