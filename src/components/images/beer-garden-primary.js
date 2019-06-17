import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const BeerGardenPrimary = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "beer-garden-primary.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 800, quality: 70) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img
      className="h-100"
      fluid={data.placeholderImage.childImageSharp.fluid} 
      objectFit="cover"
      style={{ paddingBottom: "1em"}}
    />}
  />
)
export default BeerGardenPrimary
