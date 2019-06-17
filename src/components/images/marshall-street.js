import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const alt = "Renderings of Sentinel Commons with Marshall Street in foreground"
const MarshallStreetImage = props => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "marshall-street.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920, maxHeight: 914, cropFocus: SOUTH, quality: 70) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img
        {...props}
        fluid={data.placeholderImage.childImageSharp.fluid}
        objectFit="fill"
        alt={alt}
      />
    }
  />
)
export default MarshallStreetImage
