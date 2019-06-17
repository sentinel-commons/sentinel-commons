import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const alt = "Renderings of Sentinel Commons food hall"
const FoodHallImage = props => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "food-hall.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 768, maxHeight: 432, cropFocus: SOUTHEAST, quality: 70) {
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
        objectFit="cover"
        objectPosition="50% 50%"
        style={{ maxWidth: "100%" }}
        alt={alt}
      />
    )}
  />
)
export default FoodHallImage
