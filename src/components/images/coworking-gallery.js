import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const alt = "Renderings of Sentinel Commons food hall"
const CoworkingGallery = props => (
  <StaticQuery
    query={graphql`
      query {
        imageOne: file(relativePath: { eq: "laptop-guy.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 438, maxHeight: 580, cropFocus: WEST) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageTwo: file(relativePath: { eq: "macs-rule.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 438, maxHeight: 580, cropFocus: WEST) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <div className={`flex h-100-l ${props.className}`} {...props}>
        <div className="w-50 mr2 mr4-l">
          <Img
            fluid={data.imageOne.childImageSharp.fluid}
            objectFit="cover"
            objectPosition="50% 50%"
            style={{ minHeight: "100%" }}
            alt={alt}
          />
        </div>
        <div className="w-50">
          <Img
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
