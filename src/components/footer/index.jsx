import React from 'react'
import logo from '../../images/logo.svg'
import { Facebook, Twitter, Instagram, Linkedin } from 'react-feather'
import './footer.scss'

function Footer() {
  return (
    <div className="footer">
      <div className="footer__brand pa4">
        <img src={logo} alt="Sentinel Commons Logo" className="footer__brand__logo mt3 mb3 mb4-l"/>
        <div className="footer__brand__social-image-links social-image-links mb4-l">
          <Twitter size={40} fill="#fff" stroke="transparent" className="mr2" />
          <Facebook size={40} fill="#fff" stroke="transparent" className="mr2" />
          <Instagram size={40} className="mr2" />
          <Linkedin size={40} fill="#fff" stroke="transparent" className="pl2 pr2" />
        </div>
        <p className="f6 fw5">The concepts presented are preliminary and subject to change.</p>
      </div>
      <div className="footer__section pa4 pa5-l">
        <h2 className="ttu f3 mt0 mb4-l">Contact</h2>
        <p className="f4 fw6 tracked-l">418 North Marshall St. <br />Winston-Salem, NC 27101</p>
        <p className="f4 fw6 tracked-l mb0">
          <a className="no-underline white pointer" href="tel:3368313723">336.831.3723</a>
        </p>
      </div>
    </div>
  )
}

export default Footer