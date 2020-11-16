import { string } from "prop-types"
import React from "react"
import "semantic-ui-less/semantic.less"
import {
  Button,
  Container,
  Card,
  Header,
  Grid,
  Image,
  Icon,
  Segment,
  GridRow,
  GridColumn,
  Input,
} from "semantic-ui-react"

const PlaceHolderName = { name: "TeamMemberName", title: "TeamMemberTitle" }
const PlaceHolderNames = new Array(8).fill(PlaceHolderName)

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
            <Grid.Row>
              <Grid.Column textAlign="left">
                <Button primary size="huge">
                  Check Them Out
                </Button>
                <Button primary>Primary</Button>
                <Button secondary>Secondary</Button>
              </Grid.Column>
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
          <Grid columns={4} doubling centered stackable padded>
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

        <Grid container columns={3} stackable>
          <Grid.Column>
            <Container textAlign="center" padded>
              <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
              teach <strong> Computer Science</strong> <br />
              as part of their curriculum
            </Container>
          </Grid.Column>
          <Grid.Column>
            <Container textAlign="center" padded>
              <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
              teach <strong> Computer Science</strong> <br />
              as part of their curriculum
            </Container>
          </Grid.Column>
          <Grid.Column>
            <Container textAlign="center" padded>
              <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
              teach <strong> Computer Science</strong> <br />
              as part of their curriculum
            </Container>
          </Grid.Column>
        </Grid>
      </Container>
    </>
  )
}
