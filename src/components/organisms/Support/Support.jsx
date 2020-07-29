import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import "./Support.scss"
import visionary from "../../../images/visionary-logo.png"
import builtbygirls from "../../../images/builtbygirls-logo.png"

const Support = () => {
  // const data = useStaticQuery(graphql`
  //   query Images {
  //     images: allFile(filter: { relativeDirectory: { eq: "support" } }) {
  //       nodes {
  //         id
  //         childImageSharp {
  //           fixed(height: 120) {
  //             ...GatsbyImageSharpFixed
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)
  return (
    <div>
      <div class="rectangle">
        <p>Proudly Partnered With</p>
      </div>
      <div className="image-list">
        <div className="specificimages">
          <img className="visionary-logo" src={visionary} alt="visionary-logo" />
          <img className="builtbygirls-logo" src={builtbygirls} alt="builtbygirls-logo" />
        </div>
        {/* {data.images.nodes.map(image => (
          <div className="image-list__item">
            <Img key={image.id} fixed={image.childImageSharp.fixed} />
          </div>
        ))} */}
      </div>
    </div>
  )
}

export default Support
