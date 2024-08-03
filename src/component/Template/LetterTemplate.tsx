import React from 'react'
import Tooltip from '../atoms/Tooltip/Tooltip'
import Title from '../atoms/Title/Title'
import Image from '../atoms/Image/image'
import useModal from '../../hooks/useModal'

interface LetterTemplateProps {
  tooltipMessage: string
  titleMessage: string
  imageUrl: string
  imageAlt: string
  modalTitel: string
  MoodalMessage: string
}

function LetterTemplate({
  tooltipMessage,
  titleMessage,
  imageUrl,
  imageAlt,
  modalTitel,
  MoodalMessage,
}: LetterTemplateProps) {
  const { openModal, ModalComponent } = useModal()
  return (
    <div>
      <Tooltip message={tooltipMessage}>
        <Title variant={'primary'}>{titleMessage}</Title>
        <Image url={imageUrl} alt={imageAlt} onClick={openModal} />
        <ModalComponent title={modalTitel}>{MoodalMessage}</ModalComponent>
      </Tooltip>
    </div>
  )
}

export default LetterTemplate
