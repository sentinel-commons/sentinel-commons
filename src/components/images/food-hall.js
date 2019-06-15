import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

const FoodHallImage = props => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "food-hall.jpg" }) {
          childImageSharp {
            fixed(width: 1000) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => 
      <Img 
        {...props}
        fixed={data.placeholderImage.childImageSharp.fixed} 
        objectFit="cover"
        objectPosition="50% 50%"
        style={ { maxWidth: "100%", } }
        alt="Renderings of Sentinel Commons food hall"
      />
    }
  />
)
export default FoodHallImage
