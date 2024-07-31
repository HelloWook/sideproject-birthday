import Title from '../../atoms/Title/Title'
import Image from '../../atoms/Image/image'
import useModal from '../../../hooks/useModal'
import Modal from '../../molecule/Modal'
import Tooltip from '../../atoms/Tooltip/Tooltip'

function Letter() {
  const { isOpen, openModal, closeModal } = useModal()

  return (
    <div>
      <Tooltip message={'편지를 클릭해주세요'}>
        <Title variant={'primary'}>{'감사한 마음을 전해보아요'}</Title>
        <Image url={'letter.png'} alt={'편지'} onClick={openModal} />
        {isOpen && (
          <Modal title={'편지 작성'} clickEvent={closeModal}>
            {'모달 내용'}
          </Modal>
        )}
      </Tooltip>
    </div>
  )
}

export default Letter
