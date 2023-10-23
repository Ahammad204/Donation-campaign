import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import MyOwnRouter from './MyOwnRouter/MyOwnRouter'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <ToastContainer />
  
  <RouterProvider router={MyOwnRouter}></RouterProvider>
  </React.StrictMode>,
)
