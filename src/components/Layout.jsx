import React from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import {Outlet} from 'react-router-dom'
function layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default layout