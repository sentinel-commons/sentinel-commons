import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Media from "react-media"
// import heroImageMobile from '../images/hero-mobile.jpg'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

const HeroImage = props => (
  <StaticQuery
    query={graphql`
      query {
        mobileHeroImage: file(relativePath: { eq: "hero-mobile.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 768, maxHeight: 812) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        desktopHeroImage: file(relativePath: { eq: "6th-street.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920, maxHeight: 772, cropFocus: SOUTH) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <Media query={{ maxWidth: '60rem' }}>
          {matches =>
            matches ? (
              <Img className="hero__image" style={{ position: 'absolute' }} fluid={data.mobileHeroImage.childImageSharp.fluid} />
            ) : (
              <Img className="hero__image" style={{ position: 'absolute' }} fluid={data.desktopHeroImage.childImageSharp.fluid} />
            )
          }
        </Media>
      )
    }}
  />
)

export default HeroImage