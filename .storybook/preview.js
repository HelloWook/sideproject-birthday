import { Global } from '@emotion/react'
import GlobalStyles from '../src/styles/globalStyles'
import { BrowserRouter } from 'react-router-dom'

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
      <BrowserRouter>
        <Global styles={GlobalStyles} />
        <Story />
      </BrowserRouter>
    ),
  ],
}

export default preview
