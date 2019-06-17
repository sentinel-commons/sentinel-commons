import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const alt = "Renderings of Sentinel Commons with 6th street in foreground"
const FifthStreetImage = props => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "6th-street.jpg" }) {
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
      objectFit="cover"
      objectPosition="50% 20%"
      alt={alt}
    />
    }
  />
)
export default FifthStreetImage
