import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/home.jsx'
// import OtherPage from './pages/CheckoutPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1 className='errorMessage'>Something Went Wrong!</h1>,
    children: [
      {
        index: true,
        element: <HomePage />
      }, /*{
        path: '/other',
        element: <OtherPage />
      } */
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)