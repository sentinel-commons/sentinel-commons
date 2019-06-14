import React from 'react'
import './nav.scss'
import { Mail, Phone, MapPin } from 'react-feather'

function Nav() {
  const linkStyle = 'page-nav__link pb1 pa2 pa2-l bn bg-transparent shadow:hover'
  const iconStyle = 'dn-l'
  return (
    <nav className="page-nav flex">
      <button href="#" className={`${linkStyle}`}>
        <Mail size={32} className={iconStyle} alt="contact icon" />        
        <span className="dn dib-l">
          contact
        </span>
      </button>
      <a href="https://www.google.com/maps/place/418+Marshall+St+N,+Winston-Salem,+NC+27101/@36.0992078,-80.2506814,17z/data=!3m1!4b1!4m5!3m4!1s0x8853ae43e3ece7dd:0xe4a51872326dce0c!8m2!3d36.0992078!4d-80.2484927" target="_blank" className={`${linkStyle}`}>
        <MapPin size={32} className={iconStyle} />
        <span className="dn dib-l">
          418 N. Marshall Street, Winston-Salem, NC 27101
        </span>
      </a>
      <a href="tel:1-336-831-3723" className={`${linkStyle}`}>
        <Phone size={32} className={iconStyle} alt="phone icons" />
        <span className="dn dib-l">
          336.831.3723
        </span>
      </a>
    </nav>
  )
}

export default Nav