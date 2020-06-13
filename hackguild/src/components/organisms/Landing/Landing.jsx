import React from "react"
import girl from "./../../../images/082.png"
import "./Landing.scss"

class Landing extends React.Component {
  render() {
    return (
      <div className="landing-content">
        <div className="landing-girl-image">
          <img src={girl} />
        </div>
        <div className="landing-text-box">
          <h1 className="landing-title">We Are HackGuild.</h1>

          <p className="landing-description">
            A global nonprofit dedicated to expanding access to tech education
            to underserved communities and empowering the next generation of
            innovators, computer scientists, and tech professionals.{" "}
          </p>
        </div>
      </div>
    )
  }
}

export default Landing
