import styled from '@emotion/styled'
import React from 'react'

interface ImageProps {
  url: string
  alt: string
  onClick: React.MouseEventHandler<HTMLDivElement>
}

const ImageContainer = styled.div`
  @keyframes moveUp {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-5rem);
    }
  }

  max-width: 400px;
  max-height: 200px;
  margin: auto;
  :hover {
    animation: moveUp 0.5s forwards;
  }
`

const ImageStyled = styled.img`
  margin-top: 5rem;
  height: 100%;
  width: 100%;
  background-color: transparent;
  object-fit: cover;
  :hover {
    margin-top: 10rem;
  }
`

function Image({ url, alt, onClick }: ImageProps) {
  return (
    <ImageContainer onClick={onClick}>
      <ImageStyled src={url} alt={alt} />
    </ImageContainer>
  )
}

export default Image
