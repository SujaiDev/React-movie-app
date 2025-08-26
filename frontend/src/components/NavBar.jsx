import React from 'react'
import '../css/NavBar.css'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='navbar'>
        <div className="navbar-brand">
            <Link to="/">MovieApp</Link>
        </div>
        <div className="navbar-links">
            <Link to="/" className='nav-link'>Home</Link>
            <Link to="/favorites" className='nav-link'>Favorites</Link>
        </div>
    </div>
  )
}

export default NavBar
