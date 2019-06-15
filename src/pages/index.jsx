import React from "react"

// Component Images
import HeroImage from "../components/hero-image"
import FifthStreetImage from "../components/images/5th-street"
import CoWorkingImage from "../components/images/coworking"
import FoodHallImage from "../components/images/food-hall"
import CoworkingGallery from "../components/images/coworking-gallery"
import MarshallStreetImage from "../components/images/marshall-street"
import FifthMarshallStreetImage from "../components/images/5th-marshall-street"
import BeerGardenPrimary from "../components/images/beer-garden-primary"

// Images
import logo from "../images/logo.svg"
import journalPaperImage from "../images/journal-paper.jpg"
import journalPressImage from "../images/journal-press.jpg"
import foodHallFood from "../images/food-hall-food.jpg"

import "../components/hero.scss"
import "../styles/section.scss"

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
            <span className="hero__content__byline__strong">
              ALL FOUND IN ONE PLACE.
            </span>
          </div>
          <img
            src={logo}
            alt="Sentinel Commons Logo"
            className="hero__content__logo"
          />
        </div>
      </div>
      <div className="featured-section flex flex-column center-l">
        <h2
          className={`
          page-section__title 
          f2 f1-l
          pl3 pr3 pt2 pb0 
          mb mt4 mb4 mb1-l
        `}
        >
          A MODERN &amp; FRESH APPROACH
        </h2>
        <p
          className={`
          page-section__content page-section__content--narrow
          center-l
          f4 f2-l 
          lh-copy 
          pa3 pt0
        `}
        >
          Located in the vibrant downtown core of Winston-Salem,{" "}
          <strong>Sentinel Commons</strong> is a mixed-use development that{" "}
          <strong>celebrates community</strong> by bringing people together.
          Here, unique office space, opportunities for co-working, arts,
          recreation, delicious food choices and entertainment come together in
          one convenient setting.
        </p>
      </div>
      <div className="page-section page-section--narrow flex flex-column flex-row-l tl-l center-l pl4-l pr4-l mb5-l">
        <div>
          <img
            className="dn-l mw-100"
            src={journalPaperImage}
            alt="black and white photograph of paper rolls in sentinel building"
          />
        </div>
        <div className="w-50-l mr6-l">
          <h2
            className={`
            page-section__title 
            f2 f1-l
            pl3 pr3 pt2 pb0 pl0-l pr0-l
            mb mt4 mb4 mb1-l mt0-l
          `}
          >
            Our Story
          </h2>
          <p
            className={`
            page-section__content page-section__content--narrow 
            f4 f3-l 
            lh-copy 
            pa3 pt0 pl0-l pr0-l
            ml1 mr1
          `}
          >
            Home to the iconic Winston-Salem Journal and Sentinel newspapers for
            more than 90 years, the building is a local landmark. Our{" "}
            <strong>redevelopment project</strong> partners the building’s
            historical architectural features with a crisp,{" "}
            <strong>modern transformation</strong> that seeks to bring together
            a variety of intentional uses to create a unique ecosystem. Today,
            this storied location unites businesses, entrepreneurs, and artists
            with recreation and entertainment venues to create a pronounced
            common gathering place.
          </p>
          <img
            className="mt2-l dn db-l"
            src={journalPaperImage}
            alt="black and white photograph of paper rolls in sentinel building"
          />
        </div>
        <div className="w-50-l">
          <img
            className=""
            src={journalPressImage}
            alt="black and white photograph of newspaper press in sentinel building"
          />
          <p
            className={`
            page-section__content page-section__content--narrow
            f4 f3-l 
            lh-copy 
            pa3 pt0 pl0-l pr0-l
            ml1 mr1
        `}
          >
            <strong>Sentinel Commons</strong> is situated just steps away from
            the City’s most dynamic downtown corridors.{" "}
            <strong>Neighboring attractions</strong> include renowned
            performance arts venue the Stevens Center, popular local
            restaurants, hotels, pubs, and breweries. Our location is central to
            internationally ranked USA Cycling Pro-Road Tour bicycle race, the
            Winston-Salem Classic. The River Run Film Festival, the National
            Black Theatre Festival, and various other events are also held
            downtown throughout the year. We are perfectly situated for the
            professional who wishes to{" "}
            <strong>enhance the balance between work and leisure.</strong>
          </p>
        </div>
      </div>
      <FifthStreetImage className="mb6-l mw-100" />
      <div className="page-section page-section--medium flex flex-column flex-row-l tl-l center-l pl4-l pr4-l mb2 mb6-l">
        <div className="w-third-l mr4-l">
          <h2
            className={`
            page-section__title 
            f2 f1-l
            pl3 pr3 pt2 pb0 pl0-l pr0-l
            mb mt4 mb4 mb1-l mt0-l
          `}
          >
            FOODHALL & MARKET
          </h2>
          <p
            className={`
            page-section__content
            f4 f3-l 
            lh-copy 
            pa3 pt0 pl0-l pr0-l
            ml1 mr1
          `}
          >
            The <strong>Food Hall &amp; Market</strong> brings the{" "}
            <strong>authentic</strong> culinary talent of Winston-Salem together
            in one central location. Our intent is to offer a variety of
            high-quality, <strong>well-curated food options</strong> that can be
            enjoyed in the outside courtyard or in one central food hall
            location. Choose to dine with friends, family, or choose a
            convenient take away option. Local restaurants, farmers and rising
            chefs will bring an assortment of flavors to{" "}
            <strong>accommodate your dynamic lifestyle needs.</strong>
          </p>
          <p
            className={`
            page-section__content
            f4 f3-l 
            lh-copy 
            pa3 pt0 pl0-l pr0-l
            ml1 mr1
          `}
          >
            The start-up investment cost compared to a full restaurant will be a
            fraction, lowering barriers to entry for creative entrepreneurs.
            This will be ideal for food trucks or caterers seeking a permanent
            location as well as excellent established local and regional
            concepts seeking a new outlet or downtown location.
          </p>
        </div>
        <div className="w-two-thirds-l pl4-l pr4-l">
          <FoodHallImage className="mw-100 mb2" />
          <img
            className="w-100"
            src={foodHallFood}
            alt="Images of food you might eat at the food hall!"
          />
        </div>
      </div>
      <CoWorkingImage className="mw-100 mb2 mb6-l" />
      <div className="page-section page-section--medium flex flex-column flex-row-l tl-l center-l pl4-l pr4-l mb6-l">
        <div className="w-third-l ml4-l order-2">
          <h2
            className={`
            page-section__title 
            f2 f1-l
            pl3 pr3 pt2 pb0 pl0-l pr0-l
            mb mt4 mb4 mb1-l mt0-l
          `}
          >
            Co-working
          </h2>
          <p
            className={`
            page-section__content
            f4 f3-l 
            lh-copy 
            pa3 pt0 pl0-l pr0-l
            ml1 mr1
          `}
          >
            A <strong>workspace for anyone</strong> for whom professional
            productivity and lifestyle are top priorities. Our co-working
            concept is a <strong>fully equipped</strong> workspace marrying warm
            color and rich texture with state-of-the-art technology. Small
            businesses, remote workers and visitors to Winston-Salem will&nbsp;
            <strong>organically connect and innovate here,</strong>
            in the comfort of an inviting living room setting. Offering
            strategically designed and <strong>flexible solutions</strong> with
            premier amenities, our co-working space will inspire you or your
            team to reach untapped potential.
          </p>
        </div>
        <div className="w-two-thirds-l pl4-l pr4-l">
          <CoworkingGallery />
        </div>
      </div>
      <FifthMarshallStreetImage className="mb2 mb6-l mw-100" />
      <div className="page-section page-section--medium flex flex-column flex-row-l tl-l center-l pl4-l pr4-l mb6-l">
        <div className="w-50-ns w-third-l ml4-l">
          <h2
            className={`
            page-section__title 
            f2 f1-l
            pl3 pr3 pt2 pb0 pl0-l pr0-l
            mb mt4 mb4 mb1-l mt0-l
          `}
          >
            OUTDOOR BEER GARDEN & RECREATION
          </h2>
          <p
            className={`
            page-section__content
            f4 f3-l 
            lh-copy 
            pa3 pt0 pl0-l pr0-l
            ml1 mr1
          `}
          >
            The Outdoor Beer Garden offers a common space entirely unique to
            Winston-Salem’s downtown scene. Professionals, colleagues, and
            friends can meet for a handcrafted cocktail, a glass of wine or a
            locally brewed beer. This rejuvenated courtyard will serve as a
            destination where visitors can have a drink, listen to live music,
            enjoy food, or even join a group yoga session. The indoor/ outdoor
            relationship provides a variety of networking and entertainment
            choices.
          </p>
        </div>
        <div className="w-50-ns w-two-thirds-l pl4-l pr4-l">
          <BeerGardenPrimary />
        </div>
      </div>
      <MarshallStreetImage className="mb0 mw-100" />
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
