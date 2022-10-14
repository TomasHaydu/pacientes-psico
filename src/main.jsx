import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'
import EditPatient from './pages/EditPatient'
import NewPatient from './pages/NewPatient'
import InfoPatient from './pages/InfoPatient'
import SessionPayment from './components/SessionPayment'

const router = createBrowserRouter([
  {path:'/',
  element:<Layout />,
  children:[
    {
      index:true,
      element:<Home/>
    },
    {
      path:'new',
      element:<NewPatient/>
    },
    {
      path:'edit/:id',
      element:<EditPatient/>
    },
    {
      path:':id',
      element:<InfoPatient/>
    }
  ]

}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
