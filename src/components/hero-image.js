import React from "react"
import { StaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"
import heroImageMobile from '../images/hero-mobile.jpg'

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
        placeholderImage: file(relativePath: { eq: "hero-mobile.jpg" }) {
          childImageSharp {
            fixed(width: 960) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        desktopHeroImage: file(relativePath: { eq: "6th-street.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      const isMobile = window.outerWidth < 768
      const heroImageSrc = isMobile
        ? heroImageMobile
        : data.desktopHeroImage.childImageSharp.fluid.src
      const heroBg = {
        backgroundImage: `linear-gradient(to right, rgba(155, 211, 78, .75) 0%, rgba(0, 164, 225, .75) 66%), url(${heroImageSrc})`,
      }

      return <div style={heroBg} className="hero__image"></div>
    }}
  />
)
export default HeroImage