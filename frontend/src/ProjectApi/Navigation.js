import React, { useState } from 'react'
import { useNavigate } from "react-router";
import { NavLink } from 'react-router-dom'

export default function Navigation() {
  
  const navigate=useNavigate();
  
  const [logout, setLogout] = useState(false);
  React.useEffect(() => {
    if (!localStorage.getItem('auth'))
      navigate('/')

  }, [logout])
  const handleClick = (e) => {
    localStorage.removeItem('auth');
    setLogout(true)
  }

  return (
    <div>
          <nav class="bg-gray-100">
        <div class="max-w-6xl mx-auto px-4">
          <div class="flex justify-between">

            <div class="flex space-x-4">
              {/* <!-- logo --> */}
              <div>
                <a href="#" class="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                  <svg class="h-6 w-6 mr-1 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  <span class="font-bold">StBoard </span>
                </a>
              </div>
              {/* 
        <!-- primary nav --> */}

            </div>
            <div class="hidden md:flex items-center space-x-1">
            <NavLink to='/read/:id '><a href="#" class="py-5 px-3 text-gray-700 hover:text-gray-900">Home</a></NavLink>
            <NavLink to='/VdoUld'>
            <div >
              <div class="dropdown inline-block relative">
                <button class="py-2 px-4 rounded inline-flex items-center">
                  <span class="mr-1">Upload</span>
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                </button>
                <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
                  <li class=""><a class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#"> <NavLink to='/Upload'>Image</NavLink></a></li>
                  <li class=""><a class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#"> <NavLink to='/VdoUld'>Video</NavLink></a></li>
                </ul>
              </div>
            </div>
            </NavLink>
            <NavLink to='/form'><a href="#" class="py-5 px-3 text-gray-700 hover:text-gray-900">Register</a></NavLink>
            <NavLink to='/View'><a href="#" class="py-5 px-3 text-gray-700 hover:text-gray-900">Data</a></NavLink>
            </div>
            {/* <!-- secondary nav --> */}
            <div class="hidden md:flex items-center space-x-1">

              <NavLink to='/'><a href="#" onClick={handleClick} class="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300" >Logout</a></NavLink>
           
            </div>

            {/* <!-- mobile button goes here --> */}
            <div class="md:hidden flex items-center">
              <button class="mobile-menu-button">
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

          </div>
        </div>

     
      </nav>
    </div>
  )
}
