import React from 'react'
import logo from '../../images/logo.svg'
import './footer.scss'

function Footer() {
  return (
    <div className="footer">
      <div className="footer__section">
        <h2>LEASING INFO:</h2>
        <h3>
          ADDRESS: 
        </h3>
        <p>
          418 North Marshall St. Winston-Salem, NC 27101
        </p>
      </div>
      <div className="footer__section">
        <h3>
          LOCATION: 
        </h3>
        <p>
          Twin City Quarter / Downtown Epicenter
        </p>
      </div>
      <div className="footer__section">
        <p>
          Available Square Footage +/-: 66,150 SF 
        </p>
        <p>
          To learn more about this property, contact: 
        </p>
        <p>
          Kane Wilkerson
          kane@theardengroup.com
          C: 336.831.3723
          O: 336.724.9100
        </p>
      </div>       
      <div className="footer__brand">
        <img src={logo} alt="Sentinel Commons Logo" className="footer__brand__logo"/>
        <div className="footer__brand__social-image-links social-image-links"></div>
      </div>
    </div>
  )
}

export default Footer