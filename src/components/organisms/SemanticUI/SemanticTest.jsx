import React from "react"
import "semantic-ui-less/semantic.less"
import {
  Button,
  Card,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Segment,
} from "semantic-ui-react"

const PlaceHolderName = { name: "TeamMemberName", title: "TeamMemberTitle" }
const PlaceHolderEvent = {
  ev_name: "Event Name",
  image: "https://react.semantic-ui.com/images/wireframe/image.png",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ...",
  date: "mm/dd/yyyy",
}
const PlaceHolderNames = new Array(8).fill(PlaceHolderName)
const PlaceHolderEvents = new Array(4).fill(PlaceHolderEvent)

export default function SemanticTest() {
  return (
    <>
      <Container fluid style={{ padding: "8em" }}>
        <Segment vertical>
          <Grid stackable verticalAlign="middle" columns="2">
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as="h2" color="violet">
                  Our Mission
                </Header>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  We Help Companies and Companions
                </Header>
                <p>
                  We can give your company superpowers to do things that they
                  never thought possible. Let us delight your customers and
                  empower your needs... through pure data analytics.
                </p>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  We Make Bananas That Can Dance
                </Header>
                <p style={{ fontSize: "1.33em" }}>
                  Yes that's right, you thought it was the stuff of dreams, but
                  even bananas can be bioengineered.
                </p>
              </Grid.Column>
              <Grid.Column floated="right" width={6}>
                <Image
                  bordered
                  rounded
                  size="huge"
                  src="https://via.placeholder.com/150"
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row width={6} padded stackable wrapped>
              <Button size="huge" primary raised>
                Check Them Out
              </Button>
              <Button primary size="big">
                Primary
              </Button>
              <Button secondary size="big">
                Secondary
              </Button>
            </Grid.Row>
          </Grid>

          {/* Fluid segment with button on the right*/}
          <Grid
            centered
            stackable
            verticalAlign="middle"
            columns="2"
            container
            style={{ padding: "1em 0em" }}
          >
            <Segment raised padded>
              <Grid padded stackable>
                <Grid.Row centered stackable>
                  <Grid.Column width={12}>
                    <Header as="h2" color="violet">
                      Interested in contributing?
                    </Header>
                    <Header.Subheader>
                      We can give your company superpowers to do things that
                      they never thought possible. Let us delight your customers
                      and empower your needs... through pure data analytics.
                    </Header.Subheader>
                  </Grid.Column>
                  <Grid.Column width={4}>
                    <Button primary size="huge">
                      Check Them Out
                    </Button>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
          </Grid>

          {/* Design: page 2 Learn more about the members behind HackGuild */}
          <Header as="h2" textAlign="center" color="violet">
            Our Team
            <Header.Subheader>
              This page contains some helpful examples that can be useful for
              advanced layouts.
            </Header.Subheader>
          </Header>
        </Segment>

        {/* Team Bio Cards */}
        <Container>
          <Grid columns={4} doubling centered stackable padded relaxed>
            {/* First row of members */}
            {PlaceHolderNames.map(({ name, title }) => (
              <Grid.Column>
                <Card raised>
                  <Image
                    src="https://via.placeholder.com/150"
                    wrapped
                    ui={false}
                  />
                  <Card.Content>
                    <Card.Header>{name}</Card.Header>
                    <Card.Meta>{title}</Card.Meta>
                  </Card.Content>
                </Card>
              </Grid.Column>
            ))}
          </Grid>
        </Container>

        {/*Home Page Image Placeholders*/}
        <Grid container columns={3} stackable>
          <Grid.Column>
            <Container textAlign="center" padded>
              <Image
                src="https://react.semantic-ui.com/images/wireframe/image.png"
                fluid
              />
              teach <strong> Computer Science</strong> <br />
              as part of their curriculum
            </Container>
          </Grid.Column>
          <Grid.Column>
            <Container textAlign="center" padded>
              <Image
                src="https://react.semantic-ui.com/images/wireframe/image.png"
                fluid
              />
              teach <strong> Computer Science</strong> <br />
              as part of their curriculum
            </Container>
          </Grid.Column>
          <Grid.Column>
            <Container textAlign="center" padded>
              <Image
                src="https://react.semantic-ui.com/images/wireframe/image.png"
                fluid
              />
              teach <strong> Computer Science</strong> <br />
              as part of their curriculum
            </Container>
          </Grid.Column>
        </Grid>
        {/*Events Page Top*/}
        <Header size="huge" textAlign="center" color="teal">
          Events
        </Header>
        <Header style={{ fontSize: "1.33em" }} textAlign="center">
          Check out all the events HackGuild has hosted or helped organized
        </Header>
        <Grid centered columns={2}>
          <Grid.Column>
            <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
          </Grid.Column>
        </Grid>

        {/*event cards*/}
        <Header size="large" color="violet">
          Upcoming Events
        </Header>
        <Grid columns={2} doubling stackable padded relaxed>
          {PlaceHolderEvents.map(({ ev_name, image, content, date }) => (
            <Grid.Column width={8}>
              <Segment raised>
                <Grid columns={2} padded>
                  <Grid.Column>
                    <Image src={image} />
                  </Grid.Column>
                  <Grid.Column>
                    <Header color="teal">
                      <strong>{ev_name}</strong>
                      <Header.Subheader>{date}</Header.Subheader>
                    </Header>
                    <p>{content}</p>
                    <Header as="h5" textAlign="right" color="yellow">
                      Read More...
                    </Header>
                  </Grid.Column>
                </Grid>
              </Segment>
            </Grid.Column>
          ))}
        </Grid>
      </Container>

      <Segment
        primary
        inverted
        vertical
        style={{
          margin: "5em 0em 0em",
          padding: "5em 0em",
          // backgroundColor: "purple",
        }}
      >
        <Container textAlign="center">
          <Grid divided inverted stackable>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Group 1" />
              <List link inverted>
                <List.Item as="a">Link One</List.Item>
                <List.Item as="a">Link Two</List.Item>
                <List.Item as="a">Link Three</List.Item>
                <List.Item as="a">Link Four</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Group 2" />
              <List link inverted>
                <List.Item as="a">Link One</List.Item>
                <List.Item as="a">Link Two</List.Item>
                <List.Item as="a">Link Three</List.Item>
                <List.Item as="a">Link Four</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Group 3" />
              <List link inverted>
                <List.Item as="a">Link One</List.Item>
                <List.Item as="a">Link Two</List.Item>
                <List.Item as="a">Link Three</List.Item>
                <List.Item as="a">Link Four</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header inverted as="h4" content="Footer Header" />
              <p>
                Extra space for a call to action inside the footer that could
                help re-engage users.
              </p>
            </Grid.Column>
          </Grid>

          <Divider inverted section />
          <Image centered size="mini" src="/logo.png" />
          <List horizontal inverted divided link size="small">
            <List.Item as="a" href="#">
              Site Map
            </List.Item>
            <List.Item as="a" href="#">
              Contact Us
            </List.Item>
            <List.Item as="a" href="#">
              Terms and Conditions
            </List.Item>
            <List.Item as="a" href="#">
              Privacy Policy
            </List.Item>
          </List>
        </Container>
      </Segment>
    </>
  )
}
