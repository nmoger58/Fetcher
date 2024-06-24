import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './components/Layout.jsx'
import Home from './components/Home.jsx'
import { RouterProvider, createBrowserRouter, createRoutesFromElements,Route } from 'react-router-dom'
// import Home from './components/Home/Home.jsx'
import About from './components/About.jsx'
// import Contact from './components/Contactus/Contact.jsx'
// import Privacy from './components/privacy.jsx'
import User from './components/User.jsx'
import Fetch from './components/Fetch.jsx'
// import Github, { githubloader } from './components/Github/Github.jsx'

const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:'fetch',
        element: <Fetch />,
        children:[
          {
            path:'User/:userid',
            element: <User />
          }
        ]
      },{
        path:'',
        element: <Home />
      },
      {
        path:'about',
        element: <About />
      },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
