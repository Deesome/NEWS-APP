import React from 'react'
import Category from './components/Category'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './Layout'
import Home from './components/Home'



function App() {
  const router =createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children : [
        {
          path:"",
          element:<Home/>
        },
        {
          path:"category",
          element:<Category/>
        }
      ]
    }
  ])

  return (
   <>
    <RouterProvider router={router}/>
   
   </>
  )
}

export default App