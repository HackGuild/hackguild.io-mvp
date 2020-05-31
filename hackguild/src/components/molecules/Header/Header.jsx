import { Link } from "gatsby"
import React from "react"

import Logo from "./../../../images/Wordmark.png"

class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="Logo">
                    <Link to="/">
                        <img src={Logo} />
                    </Link>
                </div>
                <div className="Links">
                    <Link to="https://forms.gle/QBJa8uDGLf3cyNSp8" target="_blank">
                        <h1>Get Involved</h1>
                    </Link>
                    <Link to="/blog">
                        <h1>Blog</h1>
                    </Link>
                    <Link to="/about">
                        <h1>About Us</h1>
                    </Link>
                </div>
            </header>
        );
    }
}

export default Header