import React from 'react'
import './nav.scss';

function Nav() {
  return (
    <nav className="page-nav">
      <a href="#" className="page-nav__link">contact</a>
      <a href="#" className="page-nav__link">Address</a>
      <a href="tel:1-336-831-3723" className="page-nav__link">336.831.3723</a>
    </nav>
  )
}

export default Nav