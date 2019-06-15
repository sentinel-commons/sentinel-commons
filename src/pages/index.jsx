import React from "react"
// import { Link } from "gatsby"
import HeroImage from "../components/hero-image"
import SixthStreetImage from "../components/images/6th-street"
import CoWorkingImage from "../components/images/coworking"
import FoodHallImage from "../components/images/food-hall"
import MarshallStreetImage from "../components/images/marshall-street"
import logo from '../images/logo.svg'
import journalPaperImage from '../images/journal-paper.jpg'
import journalPressImage from '../images/journal-press.jpg'

import '../components/hero.scss'
import '../styles/section.scss'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <div className="hero">
        <SEO title="home" />
        <HeroImage className="hero__image" />
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
      <div className="featured-section flex flex-column center-l">
        <h2 className={`
          page-section__title 
          f2 f1-l
          pl3 pr3 pt2 pb0 
          mb mt4 mb4 mb1-l
        `}>A MODERN &amp; FRESH APPROACH</h2>
        <p className={`
          page-section__content page-section__content--narrow
          center-l
          f4 f2-l 
          lh-copy 
          pa3 pt0
        `}>Located in the vibrant downtown core of Winston-Salem, <strong>Sentinel Commons</strong> is a mixed-use development that <strong>celebrates community</strong> by bringing people together. Here, unique office space, opportunities for co-working, arts, recreation, delicious food choices and entertainment come together in one convenient setting.</p>
      </div>
      <div className="page-section page-section--narrow flex flex-column flex-row-l tl-l center-l pl4-l pr4-l">
        <div>
          <img className="dn-l mw100" src={journalPaperImage} alt="black and white photograph of paper rolls in sentinel building"/>
        </div>
        <div className="w-50-l mr6-l">
          <h2 className={`
            page-section__title 
            f2 f1-l
            pl3 pr3 pt2 pb0 pl0-l pr0-l
            mb mt4 mb4 mb1-l mt0-l
          `}>Our Story</h2>
          <p className={`
            page-section__content page-section__content--narrow 
            f4 f3-l 
            lh-copy 
            pa3 pt0 pl0-l pr0-l
            ml1 mr1
          `}>Home to the iconic Winston-Salem Journal and Sentinel newspapers for more than 90 years, the building is a local landmark. Our <strong>redevelopment project</strong> partners the building’s historical architectural features with a crisp, <strong>modern transformation</strong> that seeks to bring together a variety of intentional uses to create a unique ecosystem. Today, this storied location unites businesses, entrepreneurs, and artists with recreation and entertainment venues to create a pronounced common gathering place.</p>
          <img className="mt2-l dn db-l" src={journalPaperImage} alt="black and white photograph of paper rolls in sentinel building"/>
        </div>
        <div className="w-50-l">
          <img className="" src={journalPressImage} alt="black and white photograph of newspaper press in sentinel building"/>
          <p className={`
            page-section__content page-section__content--narrow
            f4 f3-l 
            lh-copy 
            pa3 pt0 pl0-l pr0-l
            ml1 mr1
        `}><strong>Sentinel Commons</strong> is situated just steps away from the City’s most dynamic downtown corridors. <strong>Neighboring attractions</strong> include renowned performance arts venue the Stevens Center, popular local restaurants, hotels, pubs, and breweries. Our location is central to internationally ranked USA Cycling Pro-Road Tour bicycle race, the Winston-Salem Classic. The River Run Film Festival, the National Black Theatre Festival, and various other events are also held downtown throughout the year. We are perfectly situated for the professional who wishes to <strong>enhance the balance between work and leisure.</strong></p>
        </div>
      </div>
      <SixthStreetImage />
      <CoWorkingImage />
      <MarshallStreetImage />
    </Layout>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "images/journal-6.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
export default IndexPage
