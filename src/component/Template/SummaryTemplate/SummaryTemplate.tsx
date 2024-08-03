import React from 'react'
import Tooltip from '../../atoms/Tooltip/Tooltip'
import Title from '../../atoms/Title/Title'
import Image from '../../atoms/Image/image'
import useModal from '../../../hooks/useModal'

interface SummaryTemplateProps {
  tooltipMessage: string
  titleMessage: string
  imageUrl: string
  imageAlt: string
  modalTitle: string
  MoodalMessage: string
}

function SummaryTemplate({
  tooltipMessage,
  titleMessage,
  imageUrl,
  imageAlt,
  modalTitle,
  MoodalMessage,
}: SummaryTemplateProps) {
  const { openModal, ModalComponent } = useModal()
  return (
    <div>
      <Tooltip message={tooltipMessage}>
        <Title variant={'primary'}>{titleMessage}</Title>
        <Image url={imageUrl} alt={imageAlt} onClick={openModal} />
        <ModalComponent title={modalTitle}>{MoodalMessage}</ModalComponent>
      </Tooltip>
    </div>
  )
}

export default SummaryTemplate
