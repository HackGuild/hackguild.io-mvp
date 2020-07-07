import React from "react";
import "./Button.scss";

export default function Button({children, bgcolor, textColor}) {
  return(
    <div className="button" style={{backgroundColor: {bgcolor}, color: {textColor}}}>
      {children}
    </div>
  );
}