import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const alt =
  "Renderings of Sentinel Commons with corner of 5th and Marshall street in foreground"
const FifthMarshallStreetImage = props => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(
          relativePath: { eq: "5th-marshall-street.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1920, maxHeight: 914) {
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
        objectPosition="50% 20%"
        alt={alt}
      />
    )}
  />
)
export default FifthMarshallStreetImage
