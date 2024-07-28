import styled from '@emotion/styled'
import { Link, Outlet } from 'react-router-dom'
import Lable from '../atoms/Label/Lable'

const HeaderStyled = styled.ul`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
`
const LinkStyled = styled(Link)`
  text-decoration: none;
`

function Header() {
  return (
    <>
      <header>
        <HeaderStyled>
          <li>
            <LinkStyled to={'/'}>
              <Lable variant={'primary'}>{'💗추억의 순간'}</Lable>
            </LinkStyled>
          </li>
          <li>
            <LinkStyled to={'/photo'}>
              <Lable variant={'primary'}>{'📷기념 사진'}</Lable>
            </LinkStyled>
          </li>
          <li>
            <LinkStyled to={'/letter'}>
              <Lable variant={'primary'}>{'📨편지'}</Lable>
            </LinkStyled>
          </li>
          <li>
            <LinkStyled to={'/gift'}>
              <Lable variant={'primary'}>{'🎁선물 개봉'}</Lable>
            </LinkStyled>
          </li>
        </HeaderStyled>
      </header>
      <Outlet />
    </>
  )
}

export default Header
