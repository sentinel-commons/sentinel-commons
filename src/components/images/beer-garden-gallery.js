import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const alt = "Renderings of Sentinel Commons food hall"
const CoworkingGallery = props => (
  <StaticQuery
    query={graphql`
      query {
        imageOne: file(relativePath: { eq: "coctail.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 438, maxHeight: 438, cropFocus: EAST, quality: 70) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageTwo: file(relativePath: { eq: "bowling-alley.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 438, maxHeight: 438, cropFocus: WEST, quality: 70) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageThree: file(relativePath: { eq: "wine-glasses.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 438, maxHeight: 438, cropFocus: NORTHWEST, quality: 70) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <div className={`flex h-100-l ${props.className}`}>
        <div className="w-third ml4-l">
          <Img
            fluid={data.imageOne.childImageSharp.fluid}
            objectFit="cover"
            objectPosition="50% 50%"
            style={{ minHeight: "100%" }}
            alt={alt}
          />
        </div>
        <div className="w-third ml2 ml4-l mr4-l">
          <Img
            fluid={data.imageTwo.childImageSharp.fluid}
            objectFit="cover"
            objectPosition="50% 50%"
            style={{ minHeight: "100%" }}
            alt={alt}
          />
        </div>
        <div className="w-third ml2 mr4-l">
          <Img
            fluid={data.imageThree.childImageSharp.fluid}
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
