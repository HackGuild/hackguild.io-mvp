import React from "react"
import { BioCard } from "../../molecules"
import IA from "../../../images/headshot.png"

export default function Team() {
  return (
    <div className="Team">
      <div className="team-title">
        <h1>HackGuild Team</h1>
      </div>
      <BioCard className="two" headshot={IA} name="Isabel Abonitalla" position="Co-founder, Executive Director" />
      <BioCard className="two" headshot="https://source.unsplash.com/random/150x150" name="Michael Cao" position="Co-founder, Executive Director" />
      <BioCard headshot="https://source.unsplash.com/random/150x150" name="Lily Gong" position="Content Creator" />
      <BioCard headshot="https://source.unsplash.com/random/150x150" name="Kristen Lee" position="Operations Intern" />
      <BioCard headshot="https://source.unsplash.com/random/150x150" name="Estrella Popoca" position="Marketing Specialist" />
    </div>
  )
}
