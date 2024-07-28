import type { Meta, StoryObj } from '@storybook/react'
import Label from './Lable'

const meta: Meta<typeof Label> = {
  title: 'Atomic/Atom/Label',
  component: Label,
}

export default meta

type Story = StoryObj<typeof Label>

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'secondary',
  },
}
