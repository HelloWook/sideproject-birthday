import type { Meta, StoryObj } from '@storybook/react'
import Modal from './Modal'

const meta: Meta<typeof Modal> = {
  title: 'Atomic/molecule/Modal',
  component: Modal,
}

export default meta

type Modal = StoryObj<typeof Modal>

export const Primary: Modal = {
  args: {
    title: '반갑다',
    children: '반갑다고',
  },
}
