import type { Meta, StoryObj } from '@storybook/react'
import Button from './Button'

const meta: Meta<typeof Button> = {
  title: 'Atomic/Atom/Button',
  component: Button,
}

export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'primary',
    clickEvent: () => {
      alert('클릭')
    },
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'secondary',
  },
}
