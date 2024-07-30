import type { Meta, StoryObj } from '@storybook/react'
import Tooltip from './Tooltip'

const meta: Meta<typeof Tooltip> = {
  title: 'Atomic/atmos/Tooltip',
  component: Tooltip,
}

export default meta

type Tooltip = StoryObj<typeof Tooltip>

export const Primary: Tooltip = {
  args: {
    children: '반갑다',
    message: '즐겁다',
  },
}
