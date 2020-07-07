import React from "react"
import "./Biography.scss"

export default function Biography({ headshot, name, position, bio }) {
  return (
    <React.Fragment>
      <div className="Biography">
        <div className="Header">
          <img src={headshot} alt={name} className="Headshot" />
          <div className="MemberInfo">
            <h3 className="MemberName">{name}</h3>
            <h5 className="MemberPosition">{position}</h5>
          </div>
          <div className="BioParagraph">{bio}</div>
        </div>
      </div>
    </React.Fragment>
  )
}
