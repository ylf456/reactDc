import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/home.jsx'
import LoginPage from './pages/login.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1 className='errorMessage'>Something Went Wrong!</h1>,
    children: [
      {
        path:'/home',
        element: <HomePage />
      }, {
        path: '/login',
        element: <LoginPage />
      } 
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
 // <RouterProvider router={router} />
 <App />
)