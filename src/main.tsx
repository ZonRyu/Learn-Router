import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import HomePage from './pages/HomePage'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProfilesPage from './pages/ProfilesPage'
import NotFoundPage from './pages/NotFoundPage'
import ProfilePage from './pages/ProfilePage'

import './index.css'

const route = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <NotFoundPage />
  },
  {
    path: '/profiles',
    element: <ProfilesPage />,
    children: [
      {
        path: '/profiles/:profileId',
        element: <ProfilePage />
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>,
)
