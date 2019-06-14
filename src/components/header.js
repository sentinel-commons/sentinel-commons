import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Nav from './nav';

const Header = ({ siteTitle }) => (
  <header className="fixed left-0 right-0 z-1">
   <Nav />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
