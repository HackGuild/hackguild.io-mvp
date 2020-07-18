import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BioCard } from "../components/molecules"
import { About, Layout } from "../components/organisms"
import "./about.scss"
export const query = graphql`
  query {
    allContentfulBiography {
      edges {
        node {
          id
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
export default props => {
  const bio = props.data.allContentfulBiography.edges
  return (
    <>
      <Helmet>
        <title>HackGuild: increasing access to tech education</title>
        <meta name="description" content="A global nonprofit dedicated to increasing access to tech education to underserved communities and empowering the next generation of innovators, computer scientists, and tech professionals." />
      </Helmet>
      <Layout>
        <About/>
        <div className="team-title">
          <h1 className="meet-team">HackGuild Team</h1>
        </div>
        {bio.map(biography=>{
          console.log(biography.node.headshot)
          return(
            <BioCard 
              headshot={biography.node.headshot.file.url}
              name={biography.node.name}
              position={biography.node.position}
              bio={documentToReactComponents(biography.node.biography.json)}
            />
          )
        })}
    </Layout>
    </>
  )
}
