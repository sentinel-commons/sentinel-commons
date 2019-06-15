import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const alt = "Renderings of Sentinel Commons coworking"
const CoWorkingImage = props => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "coworking.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920, maxHeight: 914, cropFocus: SOUTH) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        {...props}
        fluid={data.placeholderImage.childImageSharp.fluid}
        objectFit="fill"
        alt={alt}
      />
    )}
  />
)
export default CoWorkingImage
