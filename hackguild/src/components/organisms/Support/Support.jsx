import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import "./Support.scss"

const Support = () => {
  const data = useStaticQuery(graphql`
    query Images {
      images: allFile(filter: { relativeDirectory: { eq: "support" } }) {
        nodes {
          id
          childImageSharp {
            fixed(height: 120) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  `)
  return (
    <div>
      <div class="rectangle">
        <p>Supported By</p>
      </div>
      <div className="image-list">
        {data.images.nodes.map(image => (
          <div className="image-list__item">
            <Img key={image.id} fixed={image.childImageSharp.fixed} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Support
