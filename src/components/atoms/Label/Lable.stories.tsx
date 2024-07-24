import type { Meta, StoryObj } from '@storybook/react'
import Lable from './Lable'

const meta: Meta<typeof Lable> = {
  title: 'Atomic/Atom/Lable',
  component: Lable,
}

export default meta

type Story = StoryObj<typeof Lable>

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'primary',
  },
}
