import React from "react"
import './Events.scss'
import {Event, EventContainer} from '../../molecules/EventCard'

export default function Events() {
  return (
    <>
    <div className="About">
      <h1 className="Heading">Event:</h1>
    </div>
    <EventContainer>
    </EventContainer>
    </>
  );
}
