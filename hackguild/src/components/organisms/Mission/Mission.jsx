import React from "react"
import "./Mission.scss"

import girl from "./../../../images/082.png"

const Mission = () => {
  return (
    <div className="mission-content">
      <div className="girl-image">
        <img src={girl} />
      </div>
      <div className="text-box">
        <p>
          HackGuild is a 501c3 nonprofit founded on the principles of{" "}
          <strong>inclusivity, accessibility,</strong> and{" "}
          <strong>education.</strong>
          <br />
          <br />
          We aim to provide all women and disadvantaged minorities hands-on
          experience with programming and computer science.
          <p>
            At HackGuild, we provide computer science education resources and
            create initiatives for students to learn about their field of study.
            Through our mentorship program, students learn to plan and host
            their own event.
          </p>
        </p>
      </div>
    </div>
  )
}

export default Mission
