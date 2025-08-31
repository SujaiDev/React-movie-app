import React from 'react'
import '../css/NavBar.css'
import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'

function NavBar() {

   const navRef = useRef(null);
   useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        if (window.scrollY > 20) {
          navRef.current.classList.add('scrolled');
        } else {
          navRef.current.classList.remove('scrolled');
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='navbar' ref={navRef}>
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
