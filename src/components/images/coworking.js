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

const CoWorkingImage = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "co-working.jpg" }) {
          childImageSharp {
            fixed(width: 1920, height: 914) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => 
      <Img 
        fixed={data.placeholderImage.childImageSharp.fixed} 
        objectFit="cover"
        objectPosition="50% 20%"
        alt="Renderings of Sentinel Commons coworking"
      />
    }
  />
)
export default CoWorkingImage
