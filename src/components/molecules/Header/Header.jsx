import React from "react"
import { Link } from "gatsby"
import "./Header.scss"
import Logo from "./../../../images/Wordmark.png"
import {
  Button,
  Card,
  Container,
  Divider,
  Grid,
  /*can't add Header?? */
  Image,
  List,
  Segment,
  Icon,
  Menu,
} from "semantic-ui-react"

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
                <Link to="/test">
                    <h1>Test</h1>
                </Link>
                <Link to="https://medium.com/hackguild" target="_blank" className="tabs">
                    <h1>Blog</h1>
                </Link>
                <Link to="https://forms.gle/QBJa8uDGLf3cyNSp8" target="_blank" className="tabs">
                    <h1>Get Involved</h1>
                </Link>
    </div>
    <div>
        <Menu
          fixed="top"
          color="violet"
          inverted
          secondary
          stackable
          style={{ padding: "1em" }}
        >
          <Menu.Item>
            <Image src={Logo} alt="HackGuild logo" size="tiny" />
          </Menu.Item>
          <Container widths={10} style={{ fontSize: "18px" }}>
            <Menu.Item name="home" position="right">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item name="about">
              <Link to="/about">About</Link>
            </Menu.Item>
            <Menu.Item name="blog">
              <a href="https://medium.com/hackguild" target="_blank">Blog</a>
            </Menu.Item>
            <Menu.Item name="events">
              <Link to="/events">Events</Link>
            </Menu.Item>
            <Menu.Item name="get_involved">
              <a href="https://discord.com/invite/fpmQFvh">Get Involved</a>
            </Menu.Item>
          </Container>
        </Menu>
    </div>
        </header>
    );
}