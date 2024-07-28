import type { Meta, StoryObj } from '@storybook/react'
import Title from './Title'

const meta: Meta<typeof Title> = {
  title: 'Atomic/Atom/Title',
  component: Title,
}

export default meta

type Story = StoryObj<typeof Title>

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
