import React from "react"
import { Link } from "gatsby"
import "./Header.scss"
import Logo from "./../../../images/Wordmark.png"

export default function Header() {
    return(
        <header>
            <div className="Logo">
                <Link to="/">
                    <img className="Logo" src={Logo} alt="Logo" />
                </Link>
            </div>
            <div className="Links">
                <Link to="/about">
                    <h1>About</h1>
                </Link>
                <Link to="/events">
                    <h1>Events</h1>
                </Link>
                <Link to="https://medium.com/hackguild" target="_blank" className="tabs">
                    <h1>Blog</h1>
                </Link>
                <Link to="https://forms.gle/QBJa8uDGLf3cyNSp8" target="_blank" className="tabs">
                    <h1>Get Involved</h1>
                </Link>
            </div>
        </header>
    );
}