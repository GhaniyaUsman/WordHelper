/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import PropTypes from 'prop-types'


export default function Navbar({title, aboutText}) {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    const toggleDropdown = () => {
      setDropdownOpen(!dropdownOpen);
    };

  return (
      <div className="App">
        <nav className="bg-gray-800 text-white p-4">
          <div className="container mx-auto flex items-center justify-between">
            <a className="text-xl font-bold" href="#">{title}</a>
            <button
              className="text-white md:hidden focus:outline-none"
              onClick={toggleMenu}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
            <div className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'}`}>
              <ul className="flex flex-col md:flex-row md:space-x-4">
                <li className="nav-item">
                  <a className="text-white hover:text-gray-400" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="text-white hover:text-gray-400" href="/textform">TextBox</a>
                </li>
                <li className="nav-item relative">
                  <a
                    className="text-white hover:text-gray-400"
                    href="#"
                    onClick={toggleDropdown}
                  >
                    Dropdown
                  </a> 
                  <ul className={`absolute bg-gray-800 mt-2 rounded shadow-lg ${dropdownOpen ? 'block' : 'hidden'}`}>
                    <li><a className="block px-4 py-2 text-white hover:bg-gray-700" href="#">UpperCase</a></li>
                    <li><a className="block px-4 py-2 text-white hover:bg-gray-700" href="#">LowerCase</a></li>
                    <li><a className="block px-4 py-2 text-white hover:bg-gray-700" href="#">Details</a></li>
                  </ul> 
                </li>
                <li className="nav-item">
                  <a className="text-white hover:text-gray-400 pr-3" href="/about">About</a>
                </li>
              </ul>
              <form className="flex mt-4 md:mt-0 space-x-2">
                <input className="px-3 py-2 border border-gray-600 rounded w-64" type="search" placeholder="Search" aria-label="Search" />
                <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </div>
  )
}

Navbar.proptype = {
    title: PropTypes.string,
    about: PropTypes.string
}

Navbar.defaultProps = {
    title: 'Set title here' ,
    aboutText: 'About'
}