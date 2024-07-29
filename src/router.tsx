import { createBrowserRouter } from 'react-router-dom'
import Header from './component/organsims/Header/Header'
import Memory from './component/pages/Memory/Memory'
import Photo from './component/pages/Photo/Photo'
import Letter from './component/pages/Letter/Letter'
import Gift from './component/pages/Gift/Gift'

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
