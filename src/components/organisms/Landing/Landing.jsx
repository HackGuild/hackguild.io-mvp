import React from "react";
import { Link } from "gatsby";
import girl from "./../../../images/082.png";
import "./Landing.scss";

class Landing extends React.Component {
  render() {
    return (
      <div className="landing-content">
        <img className="landing-girl-image" src={girl} alt="landing-girl" />
        <div>
          <h1 className="landing-title">We Are HackGuild.</h1>
          <p className="landing-description">
            A global nonprofit dedicated to expanding access to tech education
            to underserved communities and empowering the next generation of
            innovators, computer scientists, and tech professionals.
          </p>
          <div className="landing-button">
            <Link to="https://discord.gg/fpmQFvh" target="_blank">
              <h1>GET INVOLVED</h1>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Landing
