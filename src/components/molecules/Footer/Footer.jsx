import React from "react"
import { Link } from "gatsby"
import "./Footer.scss"
import Facebook from "../../../images/001-facebook.svg"
import Linkedin from "../../../images/010-linkedin.svg"
import Instagram from "../../../images/011-instagram.svg"
import Twitter from "../../../images/013-twitter.svg"

class Footer extends React.Component {
  render() {
    return (
      <div className="main-footer">
          <div className="row">
            <div className="col-sm-1">
                  <a
                    href="https://www.facebook.com/HackGuild/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="email"
                  >
                <img src={Facebook} alt="facebook" width={50} height={50}>
                </img>
                <i class="fa fa-envelope fa-4x" aria-hidden="true"></i>
              </a>
            </div>
            <div className="col-sm-1">
              <a
                href="https://www.linkedin.com/company/hackguild/"
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin"
              >
                <img src={Linkedin} alt="linkedin" width={50} height={50}>
                </img>
                <i class="fa fa-linkedin-square fa-4x" aria-hidden="true"></i>
              </a>
            </div>
            <div className="col-sm-1">
              <a
                href="https://www.instagram.com/hackguild/"
                target="_blank"
                rel="noopener noreferrer"
                className="instagram"
              >
                <img src={Instagram} alt="instagram" width={50} height={50}>
                </img>
                <i class="fa fa-instagram fa-4x" aria-hidden="true"></i>
              </a>
            </div>
            <div className="col-sm-1">
              <a
                href="https://twitter.com/hack_guild"
                target="_blank"
                rel="noopener noreferrer"
                className="twitter"
              >
                <img src={Twitter} alt="twitter" width={50} height={50}>
                </img>
                <i class="fa fa-twitter-square fa-4x" aria-hidden="true"></i>
              </a>
            </div>

            {/* Column1 */}
            <div className="col all-links">
              <ul className="list-unstyled home-link">
                <li className="title"><Link to="/">Home</Link></li>
              </ul>
            </div>
            {/* Column2 */}
            <div className="col all-links">
              <ul className="list-unstyled">
                <li className="title"><Link to="/about">About</Link></li>
                <li>Mission</li>
                <li>Team</li>
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
                <li><Link to="https://forms.gle/QBJa8uDGLf3cyNSp8">Internship</Link></li>
                <li><Link to="https://forms.gle/4eUvcoVoXuvagjXe6">Event Organizer</Link></li>
                <li><a href="mailto:team@hackguild.io?subject=HackGuild Sponsorship Information">Sponsor</a></li>
                <li><a href="mailto:team@hackguild.io?subject=HackGuild Donation Information">Donate</a></li>
              </ul>
            </div>
          </div>
          <div className="row">
            <p className="col-sm copyright">
              &copy; 2020 HackGuild, built with love & Gatsby. Work in Progress. All rights reserved.
            </p>
          </div>
        </div>
    )
  }
}

export default Footer
