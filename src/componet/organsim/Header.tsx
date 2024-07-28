import styled from '@emotion/styled'
import Lable from '../atoms/Label/Lable'

const HeaderStyled = styled.header`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
`

function Header() {
  return (
    <HeaderStyled>
      <Lable variant={'primary'}>{'💗추억의 순간'}</Lable>
      <Lable variant={'primary'}>{'📷기념 사진'}</Lable>
      <Lable variant={'primary'}>{'📨편지'}</Lable>
      <Lable variant={'primary'}>{'🎁선물 개봉'}</Lable>
    </HeaderStyled>
  )
}

export default Header
