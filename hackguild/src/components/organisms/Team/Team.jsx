import React from 'react'
import { BioCard } from "../../molecules"
import { graphql } from "gatsby"

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
  // const [bios, setBios] = useState([])
  // const bioLists = props.data.allContentfulBiography.edges
  // const bioList = []
  // bioLists.map(Biography => {bioList.push(Biography)})

  // useEffect(() => {
  //   setBios(bioList)
  // }, [])

  return(
    
    <div className="Team">
      <div className="meetteam">
        <h1>Hackguild Team</h1>
      </div>
      <BioCard 
        headshot="https://images.ctfassets.net/qlhzmho4n1an/7eKbUmjApNtRqcwbUqtfYJ/213b4083beaaeaceece8f54df13c5532/Isabel-_Headshot-01.png"
        name="Isabel Abonitalla" 
        position="Co-founder, Executive Director" 
        bio="Isa is a CS+bio undergrad at CUNY Hunter College. She believes in providing accessible STEM education, especially to under-served women and minorities. One day, she hopes to see more women of color in the tech industry and positions of power because they didn't experience the discrimination and lack of representation that she had gone through herself--because being one of only a handful women in upper level classes or hackathons can be quite discouraging! She founded HackGuild with Michael Cao. She acts as project manager, managing tasks, goals, and deadlines for the whole team. She is also the lead web developer."/>
      <BioCard 
        headshot="https://images.ctfassets.net/qlhzmho4n1an/22wriWOpchTd6qEMeMQIMl/a3ec81dc7c7f86a53b0e28c6ebdccbb6/Michael_Cao_Headshot_1_Square.jpg" 
        name="Michael Cao" 
        position="Co-founder, Executive Director" />
      <BioCard headshot="https://source.unsplash.com/random/150x150" name="Lily Gong" position="Content Creator" />
      <BioCard headshot="https://source.unsplash.com/random/150x150" name="Kristen Lee" position="Operations Intern" />
      <BioCard headshot="https://source.unsplash.com/random/150x150" name="Estrella Popoca" position="Marketing Specialist" />
      {/* {bios.map((Biography, index) => 
      <BioCard key={`${index++}`} headshot={Biography.node.headshot.file.url} name={Biography.node.name} position={Biography.node.position} biography={Biography.node.biography.biography} />
      )} */}
    </div>
  )
}
