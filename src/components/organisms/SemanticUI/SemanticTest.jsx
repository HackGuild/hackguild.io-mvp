import React from "react"
import "semantic-ui-less/semantic.less"
import {
  Button,
  Card,
  Container,
  Divider,
  Grid,
  GridColumn,
  Header,
  Image,
  List,
  Segment,
  Icon,
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
      <Segment vertical padded inverted centered>
        <Container fluid centered>
          <Grid stackable verticalAlign="middle" columns="2">
            <Grid.Row>
              <Grid.Column floated="right" mobile={16} tablet={6} computer={6}>
                <Container>
                  <Header as="h2" inverted content="Our mission" />
                  <p>
                    We can give your company superpowers to do things that they
                    never thought possible. Let us delight your customers and
                    empower your needs... through pure data analytics.
                  </p>
                  <Header as="h3" size="huge" inverted>
                    We Make Bananas That Can Dance
                  </Header>
                  <p style={{ fontSize: "1.33em" }}>
                    Yes that's right, you thought it was the stuff of dreams,
                    but even bananas can be bioengineered.
                  </p>
                </Container>
                <Container textAlign="center">
                  <Grid columns="2" stackable padded>
                    <Grid.Column>
                      <Button
                        size="huge"
                        primary
                        content="Check Us Out"
                      ></Button>
                    </Grid.Column>
                    <Grid.Column>
                      <Button size="big" secondary>
                        Really, do it!
                      </Button>
                    </Grid.Column>
                  </Grid>
                </Container>
              </Grid.Column>

              <Grid.Column floated="right" mobile={16} tablet={6} computer={6}>
                {/* TODO: don't hard-link this image in prod */}
                <Image
                  bordered
                  rounded
                  size="huge"
                  src="/static/082-cfbe130df5965aa54525b04e1027c627.png"
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
      <Container>
        {/* Fluid segment with button on the right*/}
        <Grid centered stackable verticalAlign="middle" columns="2">
          <Segment raised padded>
            <Grid padded stackable>
              <Grid.Row centered stackable>
                <Grid.Column mobile={16} computer={10} centered>
                  <Header as="h2" color="violet">
                    Interested in contributing?
                  </Header>
                  <Header.Subheader>
                    We can give your company superpowers to do things that they
                    never thought possible. Let us delight your customers and
                    empower your needs... through pure data analytics.
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

        <Container centered>
          <Divider />
          {/* Design: page 2 Learn more about the members behind HackGuild */}
          <Header as="h2" textAlign="center" color="violet">
            Our Team
            <Header.Subheader>
              This page contains some helpful examples that can be useful for
              advanced layouts.
            </Header.Subheader>
          </Header>
          {/* Team Bio Cards */}
          <Grid columns={4} doubling stackable padded relaxed>
            {/* First row of members */}
            {PlaceHolderNames.map(({ name, title }) => (
              <Grid.Column mobile={16} tablet={8} computer={4}>
                <Card raised centered>
                  <Image
                    src="https://via.placeholder.com/150"
                    wrapped
                    ui={false}
                  />
                  <Card.Content>
                    <Card.Header>
                      <Header as="h5" color="violet">
                        {name}
                      </Header>
                    </Card.Header>
                    <Card.Meta>{title}</Card.Meta>
                  </Card.Content>
                </Card>
              </Grid.Column>
            ))}
          </Grid>
        </Container>

        {/*Home Page Statistics Image Placeholders*/}
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
              teach <strong>Computer Science</strong> <br />
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
        <Grid columns={2} doubling stackable padded relaxed centered>
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
                    <Header
                      as="h5"
                      textAlign="right"
                      color="yellow"
                      content="Read More..."
                    />
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
              <List link inverted>
                <List.Item as="a">
                  <Icon name="facebook" size="big" /> Facebook
                </List.Item>
                <List.Item as="a">
                  <Icon name="twitter" size="big" /> Twitter
                </List.Item>
                <List.Item as="a">
                  <Icon name="medium" size="big" /> Medium
                </List.Item>
                <List.Item as="a">
                  <Icon name="instagram" size="big" /> Instagram
                </List.Item>
              </List>
            </Grid.Column>
          </Grid>

          <Divider inverted section />
          <Header
            inverted
            as="h4"
            content="© 2020 HackGuild, built with love & Gatsby. Work in Progress. All rights reserved."
          />
        </Container>
      </Segment>
    </>
  )
}
