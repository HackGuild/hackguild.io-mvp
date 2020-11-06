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
              This page contains some helpful examples that can be useful for
              advanced layouts.
            </Header.Subheader>
          </Header>

          <Button primary>Primary</Button>
          <Button secondary>Secondary</Button>
        </Segment>
        
        {/* Fluid segment with button on the right*/}
        <Segment raised>
          <Grid stackable verticalAlign="middle" columns="2" container style={{ padding: '1em 0em' }}>
            <Grid.Row>
              <Grid.Column width={10}>
                <Header as="h2" color="violet">
                  Interested in contributing?
                </Header>
                <Header.Subheader>
                  We can give your company superpowers to do things that they
                  never thought possible. Let us delight your customers and
                  empower your needs... through pure data analytics.
                </Header.Subheader>
              </Grid.Column>
              <Grid.Column width={6}>
                <Button primary floated="right" size="huge">
                  Check Them Out
                  </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        {/* Team Bio Cards */}
        <Grid columns={4} stackable>
          {/* First row of members */}
          <Grid.Row>
            <Grid.Column>
              <Card raised>
                <Image src="https://via.placeholder.com/150" wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Name</Card.Header>
                  <Card.Meta>Member</Card.Meta>
                </Card.Content>
              </Card>
            </Grid.Column>

            <Grid.Column>
              <Card raised>
                <Image src="https://via.placeholder.com/150" wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Name</Card.Header>
                  <Card.Meta>Member</Card.Meta>
                </Card.Content>
              </Card>
            </Grid.Column>

            <Grid.Column>
              <Card raised>
                <Image src="https://via.placeholder.com/150" wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Name</Card.Header>
                  <Card.Meta>Member</Card.Meta>
                </Card.Content>
              </Card>
            </Grid.Column>

            <Grid.Column>
              <Card raised>
                <Image src="https://via.placeholder.com/150" wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Name</Card.Header>
                  <Card.Meta>Member</Card.Meta>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>

          {/* Second row of members */}
          <Grid.Row>
            <Grid.Column>
              <Card raised>
                <Image src="https://via.placeholder.com/150" wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Name</Card.Header>
                  <Card.Meta>Member</Card.Meta>
                </Card.Content>
              </Card>
            </Grid.Column>

            <Grid.Column>
              <Card raised>
                <Image src="https://via.placeholder.com/150" wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Name</Card.Header>
                  <Card.Meta>Member</Card.Meta>
                </Card.Content>
              </Card>
            </Grid.Column>

            <Grid.Column>
              <Card raised>
                <Image src="https://via.placeholder.com/150" wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Name</Card.Header>
                  <Card.Meta>Member</Card.Meta>
                </Card.Content>
              </Card>
            </Grid.Column>

            <Grid.Column>
              <Card raised>
                <Image src="https://via.placeholder.com/150" wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Name</Card.Header>
                  <Card.Meta>Member</Card.Meta>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Input></Input>
      </Container>
    </>
  )
}
