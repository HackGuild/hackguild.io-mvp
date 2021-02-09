import React from "react"
import { Link } from "gatsby"
import "./Footer.scss"
import Instagram from "../../../images/011-instagram.svg"
import Twitter from "../../../images/013-twitter.svg"
import {
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Segment,
  Icon,
} from "semantic-ui-react"

class Footer extends React.Component {
  render() {
    return (
      <>
        <div className="main-footer">
          <div className="row responsive">
            <div className="col-sm-1 icon-responsive"></div>
            <div className="col-sm-1 icon-responsive"></div>
            <div className="col-sm-1 icon-responsive">
              <a
                href="https://www.instagram.com/hackguild/"
                target="_blank"
                rel="noopener noreferrer"
                className="instagram"
              >
                <img
                  src={Instagram}
                  alt="instagram"
                  width={50}
                  height={50}
                ></img>
                <i class="fa fa-instagram fa-4x" aria-hidden="true"></i>
              </a>
            </div>
            <div className="col-sm-1 icon-responsive">
              <a
                href="https://twitter.com/hack_guild"
                target="_blank"
                rel="noopener noreferrer"
                className="twitter"
              >
                <img src={Twitter} alt="twitter" width={50} height={50}></img>
                <i class="fa fa-twitter-square fa-4x" aria-hidden="true"></i>
              </a>
            </div>

            {/* Column1 */}
            <div className="col all-links">
              <ul className="list-unstyled home-link">
                <li className="title">
                  <Link to="/">Home</Link>
                </li>
              </ul>
            </div>
            {/* Column2 */}
            <div className="col all-links">
              <ul className="list-unstyled">
                <li className="title">
                  <Link to="/about">About</Link>
                </li>
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
                <li>
                  <Link to="https://forms.gle/QBJa8uDGLf3cyNSp8">
                    Internship
                  </Link>
                </li>
                <li>
                  <Link to="https://forms.gle/4eUvcoVoXuvagjXe6">
                    Event Organizer
                  </Link>
                </li>
                <li>
                  <a href="mailto:team@hackguild.io?subject=HackGuild Sponsorship Information">
                    Sponsor
                  </a>
                </li>
                <li>
                  <a href="mailto:team@hackguild.io?subject=HackGuild Donation Information">
                    Donate
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row responsive">
            <p className="col-sm copyright">
              &copy; 2020 HackGuild, built with love & Gatsby. Work in Progress.
              All rights reserved.
            </p>
          </div>
        </div>

        <Segment
          primary
          inverted
          vertical
          padded
          style={{
            margin: "5em 0em 0em",
          }}
        >
          <Container fluid padded textAlign="left">
            <Grid inverted stackable padded fontSize={10}>
              <Grid.Column width={5} padded>
                {/* TODO: remove hard-link */}
                <Image
                  centered
                  rounded
                  src="/static/Wordmark-cf74c7bcf886710257dc743b5f891999.png"
                  size="small"
                />
              </Grid.Column>
              <Grid.Column width={2}>
                <Header inverted as="h4" content="Home" />
                <List link inverted>
                  <List.Item as="a">Link One</List.Item>
                  <List.Item as="a">Link Two</List.Item>
                  <List.Item as="a">Link Three</List.Item>
                  <List.Item as="a">Link Four</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={2}>
                <Header inverted as="h4" content="About" />
                <List link inverted>
                  <List.Item as="a">Link One</List.Item>
                  <List.Item as="a">Link Four</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={2}>
                <Header inverted as="h4" content="Blog" />
                <List link inverted>
                  <List.Item as="a">Link One</List.Item>
                  <List.Item as="a">Link Two</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={2}>
                <Header inverted as="h4" content="Get Invovled" />
                <List link inverted>
                  <List.Item as="a">Link One</List.Item>
                  <List.Item as="a">Link Two</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Follow us" />
                <List link inverted textAlign="left">
                  {[
                    {
                      icon: "Facebook",
                      site: "https://www.facebook.com/HackGuild/",
                    },
                    { icon: "Twitter", site: "" },
                    { icon: "Medium", 
                    site: "https://medium.com/hackguild" },
                    { icon: "Instagram", 
                    site: "https://www.instagram.com/hackguild/" },
                    {
                      icon: "LinkedIn",
                      site: "https://www.linkedin.com/company/hackguild/",
                    },
                  ].map(({ icon, site }) => (
                    <div style={{ padding: 0, margin: 0 }}>
                      <List.Item
                        as="a"
                        floated="left"
                        href={site}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon
                          name={icon.toLowerCase()}
                          size="big"
                          inverted
                          content={icon}
                        />{" "}
                        {icon}
                      </List.Item>
                    </div>
                  ))}
                </List>
              </Grid.Column>
            </Grid>

            <Divider inverted section />
            <Header
              inverted
              as="h4"
              content="&copy; 2020 HackGuild, built with love &amp; Gatsby. Work in Progress. All rights reserved."
            />
          </Container>
        </Segment>
      </>
    )
  }
}

export default Footer
