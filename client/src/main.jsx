import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'



// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     errorElement: <h1 className='errorMessage'>Something Went Wrong!</h1>,
//     children: [
//       {
//         path:'/home',
//         element: <HomePage />
//       }
//       //, {
//       //   path: '/login',
//       //   element: <LoginPage />
//       // } 
//     ]
//   }
// ])

ReactDOM.createRoot(document.getElementById('root')).render(

 <App />
)