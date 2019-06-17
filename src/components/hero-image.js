import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Media from "react-media"
import FifthStreetImage from "./images/5th-street"

const HeroImage = props => (
  <StaticQuery
    query={graphql`
      query {
        mobileHeroImage: file(relativePath: { eq: "hero-mobile.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 768, maxHeight: 812, quality: 70) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <Media query={{ maxWidth: "60rem" }}>
          {matches =>
            matches ? (
              <Img
                className="hero__image"
                style={{ position: "absolute" }}
                fluid={data.mobileHeroImage.childImageSharp.fluid}
              />
            ) : (
              <FifthStreetImage className="hero__image" />
            )
          }
        </Media>
      )
    }}
  />
)

export default HeroImage
