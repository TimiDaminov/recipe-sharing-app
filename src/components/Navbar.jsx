import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <div>
          

<nav className="w-full ">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

  <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <Link className="text-white bg-[#FFC470] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" to="/create_recipe">Add new recipe</Link>

  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
    <li>
        <Link to="/feed" className="block py-2 px-3 text-white bg-[#fff] rounded md:bg-transparent md:text-[#fff] md:p-0 " aria-current="page">Feed</Link>
    </li>
    <li>
        <Link to="/" className="block py-2 px-3 text-white bg-[#fff] rounded md:bg-transparent md:text-[#fff] md:p-0" aria-current="page">Home</Link>
    </li>
    </ul>
  </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar