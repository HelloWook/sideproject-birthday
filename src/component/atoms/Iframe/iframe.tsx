import styled from '@emotion/styled'
import React from 'react'

const Container = styled.div`
  width: 1000px;
  height: 600px;
  padding: 3rem;
  margin: auto;
`

function Iframe() {
  return (
    <Container>
      <iframe
        width={'100%'}
        height={'100%'}
        src={'https://www.youtube.com/embed/gY5TgD-yRPI?si=71QH691OIKwx1G5k?autoplay=1'}
        title={'YouTube video player'}
        allow={'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'}
        referrerPolicy={'strict-origin-when-cross-origin'}
      />
    </Container>
  )
}

export default Iframe
