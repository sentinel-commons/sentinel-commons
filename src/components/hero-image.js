import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Media from "react-media"

const HeroImage = props => (
  <StaticQuery
    query={graphql`
      query {
        mobileHeroImage: file(relativePath: { eq: "hero-mobile.jpg" }) {
          childImageSharp {
            fluid(
              maxWidth: 768
              maxHeight: 812
              quality: 70
            ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        placeholderImage: file(relativePath: { eq: "6th-street.jpg" }) {
          childImageSharp {
            fluid(
              maxWidth: 1920
              maxHeight: 914
              cropFocus: SOUTH
              quality: 70
            ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <Media query="(max-width: 60em)">
          {matches => (
            <Img
              className="hero__image"
              style={{ position: "absolute" }}
              fluid={
                matches
                  ? data.mobileHeroImage.childImageSharp.fluid
                  : data.placeholderImage.childImageSharp.fluid
              }
            />
          )}
        </Media>
      )
    }}
  />
)

export default HeroImage
