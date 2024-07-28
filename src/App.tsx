import React from 'react'
import { Global } from '@emotion/react'
import { RouterProvider } from 'react-router-dom'
import GlobalStyles from './styles/globalStyles'
import router from './router'

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <Global styles={GlobalStyles} />
    </>
  )
}

export default App
