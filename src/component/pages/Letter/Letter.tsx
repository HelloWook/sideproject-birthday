import Title from '../../atoms/Title/Title'
import Image from '../../atoms/Image/image'
import useModal from '../../../hooks/useModal'
import Tooltip from '../../atoms/Tooltip/Tooltip'

function Letter() {
  const { openModal, ModalComponent } = useModal()

  return (
    <div>
      <Tooltip message={'편지를 클릭해주세요'}>
        <Title variant={'primary'}>{'감사한 마음을 전해보아요'}</Title>
        <Image url={'letter.png'} alt={'편지'} onClick={openModal} />
        <ModalComponent title={'편지 작성'}>{'모달 내용'}</ModalComponent>
      </Tooltip>
    </div>
  )
}

export default Letter
