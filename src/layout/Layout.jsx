import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from './navitems/Navbar'
import Fotter from './fotter/Fotter'
const Layout = () => {
  return (
    <div className=' z-10'>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Fotter></Fotter>
    </div>
  )
}

export default Layout