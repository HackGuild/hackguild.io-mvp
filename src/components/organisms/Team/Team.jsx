import React from 'react'
import { BioCard } from "../../molecules"
import { graphql, StaticQuery } from "gatsby"
import "./Team.scss"

export default function Team(props) {
  return(
    <div className="Team">
      <div className="team-title">
        <h1 className="meet-team">HackGuild Team</h1>
      </div>
      <StaticQuery query = { graphql`
        query {
          allContentfulBiography {
            edges {
              node {
                biography {
                  json
                }
                headshot {
                  file {
                    url
                  }
                }
                name
                position
              }
            }
          }
        }
      `
      }
      render = {
        bio =>(
          <BioCard 
            headshot={bio.data.allContentfulBiography.edges.node.headshot.file.url}
            name={bio.data.allContentfulBiography.edges.node.name}
            position={bio.data.allContentfulBiography.edges.node.position}
            bio={bio.data.allContentfulBiography.edges.node.biography.json.content.content.value}
          />
        )
      } />
    </div>
  )
}
