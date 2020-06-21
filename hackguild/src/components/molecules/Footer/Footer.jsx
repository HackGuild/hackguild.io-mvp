import React from "react"
import "./Footer.scss"

class Footer extends React.Component {
  render() {
    return (
      <div className="main-footer">
        <div className="px-5">
          <div className="row">
            <div className="col-sm-1">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="email"
              >
                <i class="fa fa-envelope fa-4x" aria-hidden="true"></i>
              </a>
            </div>
            <div className="col-sm-1">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin"
              >
                <i class="fa fa-linkedin-square fa-4x" aria-hidden="true"></i>
              </a>
            </div>
            <div className="col-sm-1">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="instagram"
              >
                <i class="fa fa-instagram fa-4x" aria-hidden="true"></i>
              </a>
            </div>
            <div className="col-sm-1">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="twitter"
              >
                <i class="fa fa-twitter-square fa-4x" aria-hidden="true"></i>
              </a>
            </div>

            {/* Column1 */}
            <div className="col all-links">
              <ul className="list-unstyled">
                <li className="title">Home</li>
              </ul>
            </div>
            {/* Column2 */}
            <div className="col all-links">
              <ul className="list-unstyled">
                <li className="title">About</li>
                <li>Team</li>
                <li>Mission</li>
              </ul>
            </div>
            {/* Column3 */}
            <div className="col all-links">
              <ul className="list-unstyled">
                <li className="title">Blog</li>
                <li>News</li>
                <li>Events</li>
                <li>Resources</li>
              </ul>
            </div>
            {/* Column4 */}
            <div className="col all-links">
              <ul className="list-unstyled">
                <li className="title">Get Involved</li>
                <li>Internship</li>
                <li>Mentee</li>
                <li>Sponsor</li>
                <li>Donor</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <p className="col-sm copyright">
              &copy; 2020 HackGuild, built with love & Gatsby. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
