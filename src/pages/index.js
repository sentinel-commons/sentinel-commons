import React from "react"
// import { Link } from "gatsby"
// import Image from "../components/image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import logo from '../images/logo.svg'
import heroImage from '../images/hero-image.jpg'

import '../components/hero.scss'
import '../styles/section.scss'

const IndexPage = () => {
  const heroBg = { 
    background: `linear-gradient(to right, rgba(155, 211, 78, .85) 0%, rgba(0, 164, 225, .85) 66%), url(${heroImage})`,
    backgroundPosition: '41% 66%',
    backgroundSize: 'auto 121%',
  }

  return (
    <Layout>
      <div style={heroBg} className="hero">
        <SEO title="home" />
        <div className="hero__content">
          <div className="hero__content__byline">
            <span>UNIQUE OFFICE SPACE, OPPORTUNITIES </span>
            <span>FOR CO-WORKING, AND ACCESS TO ARTS, </span>
            <span>ENTERTAINMENT, AND DELICIOUS FOOD ARE </span>
            <span className="hero__content__byline__strong">ALL FOUND IN ONE PLACE.</span>
          </div>
          <img src={logo} alt="Sentinel Commons Logo" className="hero__content__logo"/>
        </div>
      </div>
      <div className="page-section">
        <h2 className="page-section__title">A MODERN &amp; FRESH APPROACH</h2>
        <p className="page-section__content page-section__content--narrow">Located in the vibrant downtown core of Winston-Salem, <strong>Sentinel Commons</strong> is a mixed-use development that <strong>celebrates community</strong> by bringing people together. Here, unique office space, opportunities for co-working, arts, recreation, delicious food choices and entertainment come together in one convenient setting.</p>
      </div>
      <div className="page-section">
        <h2 className="page-section__title">OUR STORY</h2>
        <p className="page-section__content page-section__content--narrow">Home to the iconic Winston-Salem Journal and Sentinel newspapers for more than 90 years, the building is a local landmark. Our redevelopment project partners the building’s historical architectural features with a crisp, modern transformation that seeks to bring together a variety of intentional uses to create a unique ecosystem. Today, this storied location unites businesses, entrepreneurs, and artists with recreation and entertainment venues to create a pronounced common gathering place.</p>
      </div>
    </Layout>
  )
}
export default IndexPage
