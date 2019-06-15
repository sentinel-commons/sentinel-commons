import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { isMobile } from "../../utils"

const alt = "Renderings of Sentinel Commons coworking"
const CoWorkingImage = props => (
  <StaticQuery
    query={graphql`
      query {
        mobileImage: file(relativePath: { eq: "coworking.jpg" }) {
          childImageSharp {
            fixed(width: 768, cropFocus: SOUTHEAST) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        placeholderImage: file(relativePath: { eq: "coworking.jpg" }) {
          childImageSharp {
            fixed(width: 1920, height: 914, cropFocus: SOUTH) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => isMobile 
      ? <img {...props} src={data.mobileImage.childImageSharp.fixed.src} alt={alt} />
      : <Img {...props} fixed={data.placeholderImage.childImageSharp.fixed} objectFit="fill" />
    }
  />
)
export default CoWorkingImage
