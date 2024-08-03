import { useState } from 'react'
import Modal from '../component/molecule/Modal/Modal'

function useModal() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)
  const ModalComponent = ({ title, children }: { title: string; children: React.ReactNode }) =>
    isOpen ? (
      <Modal title={title} clickEvent={closeModal}>
        {children}
      </Modal>
    ) : null

  return {
    isOpen,
    openModal,
    closeModal,
    ModalComponent,
  }
}

export default useModal
