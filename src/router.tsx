import { createBrowserRouter } from 'react-router-dom'
import Header from './component/organsims/Header'
import Memory from './component/pages/Memory'
import Photo from './component/pages/Photo'
import Letter from './component/pages/Letter'
import Gift from './component/pages/Gift'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    children: [
      {
        path: '/',
        element: <Memory />,
      },
      {
        path: '/photo',
        element: <Photo />,
      },
      {
        path: '/letter',
        element: <Letter />,
      },
      {
        path: '/gift',
        element: <Gift />,
      },
    ],
  },
])

export default router
