import Lable from '../componet/atoms/Label/Lable'

function Header() {
  return (
    <header>
      <Lable variant={'primary'}>{'추억의 순간'}</Lable>
      <Lable variant={'primary'}>{'기념 사진'}</Lable>
      <Lable variant={'primary'}>{'편지 쓰기'}</Lable>
      <Lable variant={'primary'}>{'선물 개봉'}</Lable>
    </header>
  )
}

export default Header
