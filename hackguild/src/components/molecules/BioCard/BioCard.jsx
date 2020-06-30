import React from "react";
import "./BioCard.scss";

export default function BioCard({ headshot, name, position}) {
    return(
        <React.Fragment>
            <div className="Member">
                <img src={headshot} alt={name} className="Headshot" />
                <div className="MemberInfo">
                    <h3 className="MemberName">{name}</h3>
                    <h5 className="MemberPosition">{position}</h5>
                </div>
                <div className="Biography">
                    <p>
                        
                    </p>
                </div>
            </div>
        </React.Fragment>
    );
}