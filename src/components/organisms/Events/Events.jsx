import React from "react"
import "./Events.scss"
import { Event, EventContainer } from "../../molecules/EventCard"

export default function Events() {
  return (
    <>
      <div className="About">
        <h1 className="Heading">Event:</h1>
      </div>
      <EventContainer
        name="Event name"
        description='description "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."'
        subtitle="short decriptin"
        eventType='type: hackathon'
        photo='https://images.unsplash.com/photo-1573697642499-959af31639ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80'
      ></EventContainer>
    </>
  )
}
