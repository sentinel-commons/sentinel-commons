import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const BeerGardenPrimary = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "beer-garden-primary.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
  />
)
export default BeerGardenPrimary
