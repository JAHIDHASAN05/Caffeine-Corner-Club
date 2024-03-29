import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AddCoffee from './Components/AddCoffee.jsx'
import UpdateCoffee from './Components/UpdateCoffee.jsx'


const router=createBrowserRouter([
  {
    path :'/',
    element :<App></App>,
    loader: ()=> fetch('http://localhost:5000/coffees')
  },
  {
    path :"add-coffe",
    element: <AddCoffee></AddCoffee>
  },
  {
    path : "update-coffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({params})=>fetch(`http://localhost:5000/coffees/${params.id}`)
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
