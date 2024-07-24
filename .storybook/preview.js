import { Global } from '@emotion/react'
import GlobalStyles from '../src/styles/globalStyles'

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <>
        <Global styles={GlobalStyles} />
        <Story />
      </>
    ),
  ],
}

export default preview
