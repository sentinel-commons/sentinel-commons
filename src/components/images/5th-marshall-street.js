import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { isMobile } from '../../utils'
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

const alt = "Renderings of Sentinel Commons with corner of 5th and Marshall street in foreground"
const FifthMarshallStreetImage = props => (
  <StaticQuery
    query={graphql`
      query {
        mobileImage: file(relativePath: { eq: "5th-marshall-street.jpg" }) {
          childImageSharp {
            fixed(width: 768, cropFocus: SOUTHEAST) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        placeholderImage: file(relativePath: { eq: "5th-marshall-street.jpg" }) {
          childImageSharp {
            fixed(width: 1920, height: 914) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => isMobile 
      ? <img {...props} src={data.mobileImage.childImageSharp.fixed.src} alt={alt} />
      : <Img 
        {...props}
        fixed={data.placeholderImage.childImageSharp.fixed} 
        objectFit="cover"
        objectPosition="50% 20%"
        alt={alt}
      />
    }
  />
)
export default FifthMarshallStreetImage
