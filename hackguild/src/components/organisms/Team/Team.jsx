import React from 'react'
import { BioCard } from "../../molecules"
import { graphql } from "gatsby"
import IA from "./../../../images/headshot.png"

export const data = graphql`
  query {
    allContentfulBiography {
      edges {
        node {
          position
          name
          headshot {
            file {
              url
            }
          }
          biography {
            biography
          }
        }
      }
    }
  }
`

export default function Team(props) {
  // const bioLists = props.data.allContentfulBiography.edges
  // const bioList = []
  // bioLists.map(Biography => {bioList.push(Biography)})

  return(
    <div className="Team">
      <div className="team-title">
          <h1>HackGuild Team</h1>
      </div>
      <BioCard headshot={IA} name="Isabel Abonitalla" position="Co-founder, Executive Director" />
      <BioCard headshot="https://source.unsplash.com/random/150x150" name="Michael Cao" position="Co-founder, Executive Director" />
      <BioCard headshot="https://source.unsplash.com/random/150x150" name="Lily Gong" position="Content Creator" />
      <BioCard headshot="https://source.unsplash.com/random/150x150" name="Kristen Lee" position="Operations Intern" />
      <BioCard headshot="https://source.unsplash.com/random/150x150" name="Estrella Popoca" position="Marketing Specialist" />
      {/* {Biography.map((Biography, index) => 
      <BioCard key={`${index++}`} headshot={Biography.node.headshot.file.url} name={Biography.node.name} position={Biography.node.position} biography={Biography.node.biography.biography} />
      )} */}
    </div>
  );
}