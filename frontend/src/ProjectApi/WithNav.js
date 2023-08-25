import React from 'react'
import Navbar from './Navigation';
import { Outlet } from 'react-router';
export default function WithNav() {
  return (
    <div>
       <Navbar/>
       <Outlet/>
    </div>
  )
}
