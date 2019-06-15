import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { isMobile } from "../../utils"

const alt = "Renderings of Sentinel Commons food hall"
const CoworkingGallery = props => (
  <StaticQuery
    query={graphql`
      query {
        imageOne: file(relativePath: { eq: "laptop-guy.jpg" }) {
          childImageSharp {
            fixed(width: 768, height: 528, cropFocus: EAST) {
              ...GatsbyImageSharpFixed
            }
            fluid(maxWidth: 768, cropFocus: EAST) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageTwo: file(relativePath: { eq: "macs-rule.jpg" }) {
          childImageSharp {
            fixed(width: 768, height: 528, cropFocus: EAST) {
              ...GatsbyImageSharpFixed
            }
            fluid(maxWidth: 768, cropFocus: EAST) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <div className="flex h-100-l">
        <div className="w-50 mr5-l">
          <Img
            {...props}
            fluid={data.imageOne.childImageSharp.fluid}
            objectFit="cover"
            objectPosition="50% 50%"
            style={{ minHeight: "100%" }}
            alt={alt}
          />
        </div>
        <div className="w-50">
          <Img
            {...props}
            fluid={data.imageTwo.childImageSharp.fluid}
            objectFit="cover"
            objectPosition="50% 50%"
            style={{ minHeight: "100%" }}
            alt={alt}
          />
        </div>
      </div>
    )}
  />
)
export default CoworkingGallery
