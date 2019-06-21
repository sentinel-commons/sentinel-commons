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
          <a className="footer__link" target="_blank" rel="noopener noreferrer" alt="Twitter - Sentinel Commons" href="https://twitter.com/SentinelCommons">
            <Twitter size={40} fill="#fff" stroke="transparent" className="mr2" />
          </a>
          <a className="footer__link" target="_blank" rel="noopener noreferrer" alt="Facebook - Sentinel Commons" href="https://www.facebook.com/Sentinel-Commons-365328507456923">
            <Facebook size={40} fill="#fff" stroke="transparent" className="mr2" />
          </a>
          <a className="footer__link" target="_blank" rel="noopener noreferrer" alt="Instagram - Sentinel Commons" href="https://www.instagram.com/sentinelcommons/">
            <Instagram size={40} stroke="white" className="mr2" />
          </a>
          <a className="footer__link" target="_blank" rel="noopener noreferrer" alt="Instagram - Sentinel Commons" href="https://www.linkedin.com/company/sentinel-commons/about/">
            <Linkedin size={40} fill="#fff" stroke="transparent" className="pl2 pr2" />
          </a>
        </div>
        <p className="f6 fw5">The concepts presented are preliminary and subject to change.</p>
      </div>
      <div className="footer__section pa4 pa5-l">
        <h2 className="ttu f3 mt0 mb4-l">Contact</h2>
        <p className="f4 fw6 tracked-l">418 North Marshall St. <br />Winston-Salem, NC 27101</p>
        <p className="f4 fw6 tracked-l mb0">
          <a className="footer__link no-underline white pointer" href="tel:3368313723">336.831.3723</a>
        </p>
      </div>
    </div>
  )
}

export default Footer