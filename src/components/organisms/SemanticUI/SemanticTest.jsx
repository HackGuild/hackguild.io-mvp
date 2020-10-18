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
} from "semantic-ui-react"

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
              </Grid.Column>
            </Grid.Row>
          </Grid>

          {/* Design: page 2 Learn more about the members behind HackGuild */}
          <Header as="h2" textAlign="center" color="violet">
            Our Team
            <Header.Subheader>
              This page contains some helpful examples that can be usefull for
              advanced layouts.
            </Header.Subheader>
          </Header>

          <Button primary>Primary</Button>
          <Button secondary>Secondary</Button>
        </Segment>
        <Container>
          <Card fluid color="purple" header='Interested in contributing?'>
            {/* <Grid stackable verticalAlign="middle" columns="2">
              <Grid.Row>
                <Grid.Column width={8}>
                </Grid.Column>
                <Grid.Column floated="right" width={6}>
                  <Button primary size="huge">
                    Check Them Out
                  </Button>
                </Grid.Column>
              </Grid.Row>
            </Grid> */}
          </Card>
        </Container>
      </Container>
    </>
  )
}
