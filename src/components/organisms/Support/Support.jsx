import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import "./Support.scss"
import notion from "../../../images/notion-logo.png"
import builtbygirls from "../../../images/builtbygirls-logo.png"
import google from "../../../images/google-logo.png"

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
        <p>Supported By</p>
      </div>
      <div className="image-list">
        <div class="specificimages">
          <img className="notion-logo" src={notion} alt="notion-logo" />
          <img className="builtbygirls-logo" src={builtbygirls} alt="builtbygirls-logo" />
          <img className="google-logo" src={google} alt="google-logo" />
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
