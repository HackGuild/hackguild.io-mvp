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
        bio="Isa is a CS+bio undergrad at CUNY Hunter College. She believes in providing accessible STEM education, especially to under-served women and minorities. One day, she hopes to see more women of color in the tech industry and positions of power because they didn't experience the discrimination and lack of representation that she had gone through herself--because being one of only a handful women in upper level classes or hackathons can be quite discouraging! She founded HackGuild with Michael Cao. She acts as project manager, managing tasks, goals, and deadlines for the whole team. She is also the lead web developer."
      />
      <BioCard 
        headshot="https://images.ctfassets.net/qlhzmho4n1an/22wriWOpchTd6qEMeMQIMl/a3ec81dc7c7f86a53b0e28c6ebdccbb6/Michael_Cao_Headshot_1_Square.jpg" 
        name="Michael Cao" 
        position="Co-founder, Executive Director" 
        bio="Michael Cao is a junior majoring in Information Sciences and Technology at Penn State University. With a strong passion for social good and computer science education, he is heavily involved in youth led organizations and entrepreneurship. Through working with hackathons, nonprofits, and more, he's been able to pursue his goal of expanding the accessibility of computer science education to disadvantaged people around the world. When he's not working on his nonprofits and hackathons, you can find him stressing out about schoolwork, trying to get his latest crazy idea going, or doing his best to help others gain the skills he wishes he had learned in high school."
      />
      <BioCard 
        headshot="https://images.ctfassets.net/qlhzmho4n1an/74rdPkZ081f2qgnjY8ezsq/602e36b99e963bdf6ac9676178d0cfa9/headshotGeorgasSara.jpg" 
        name="Sara Georgas" 
        position="Public Relations: Graphic Design" 
        bio="Sara Georgas is a freelance graphic designer and illustrator. She enjoys helping non-profits and startups with branding and social media work in order to help the community. Besides being involved with women-owned businesses and starting her own freelance business, she wants to see women be encouraged to learn more about computer science and thrive in the STEM fields. She is responsible for the branding and social media design of HackGuild. She leads the branding for the social team to make sure of consistency and offers advice in those fields.
        "
      />
      <BioCard 
        headshot="https://images.ctfassets.net/qlhzmho4n1an/3RHC1xm0jjdL7vNGmfiOk1/1da68a56e5b38c5c695f99e545503554/HeadshotGongLily.jpg" 
        name="Lily Gong" 
        position="Public Relations: Content Creator" 
        bio="Lily Gong is a rising senior at Palisades Charter High School. She is highly interested in computer science and passionate about empowering women and minorities in STEM. She is actively involved as a leader in her community through various clubs and nonprofits and is currently working on various research projects to further her interests. She loves writing and is the Features editor of her school newspaper and is currently working with other blogs to cast light on important topics."
      />
      <BioCard 
        headshot="https://images.ctfassets.net/qlhzmho4n1an/1phTJ5thYqPZxjiy7GUguR/a70a3bdb248fbefab350b31d319136ae/headshot0.jpg" 
        name="Jillian Holbrook" 
        position="Public Relations: Content Creator" 
        bio="Jillian Holbrook is an advocate for gender equality in STEAM from Mead High School in Spokane, WA. She works on the Public Relations team for HackGuild — using her passion for writing to create blog posts. Outside of HackGuild, she is addicted to neuroscience, bubble tea, vinyl records, reading, and taking her puppy on walks."
      />
      <BioCard 
        headshot="https://source.unsplash.com/random/150x150" 
        name="Audrey Kim" 
        position="Public Relations: Social Media" 
        bio="Audrey Kim is a member of HackGuild's public relations team, and is an up-and-coming Nongshim Shin Ramyun Noodle Soup enthusiast. Although she calls the Bay Area as her home, she'll be attending school in southern California. She hopes that you'll help us in providing STEM education for all!"
      />
      <BioCard 
        headshot="https://images.ctfassets.net/qlhzmho4n1an/2xZIPxeOaTFd9RU8e95xIX/b8c676df7e0a090ee4775911ba79aff2/headshot3.jpg" 
        name="Emily Kwen" 
        position="Public Relations" 
        bio="Hi! My name is Emily Kwen. I am a rising college freshman on the East Coast. Throughout high school, I was heavily involved in my school’s STEM classes/clubs, and hope to continue in college. At HackGuild, I am part of Operations Team, and I’m very excited to see where we can take this organization!"
      />
      <BioCard 
        headshot="https://images.ctfassets.net/qlhzmho4n1an/2utrs9gk1OMZARwvIqVZ6e/0f1369b97754f9a20a18ac635bf6089e/headshot1.jpg" 
        name="Kristen Lee" 
        position="Operations" 
        bio="Kristen Lee is a rising senior at Tenafly High School with strong interests in science and technology. Kristen also enjoys spending time giving back to the community, especially through events held by her high school’s Key Club or helping teach kids at her local Karate dojo. In her free time, Kristen loves bullet journaling, upcycling old clothes, and going to concerts with friends!"
      />
      <BioCard 
        headshot="https://images.ctfassets.net/qlhzmho4n1an/3M42TZDhJu9hDYjP27fkk4/790fbed4d4acaee63b5e0fb3691ffeed/headshotPopocaEstrella.jpg" 
        name="Estrella Popoca" 
        position="Public Relations: Social Media" 
        bio="Estrella Popoca is a 12th-grade student at Proviso Math and Science Academy in West Chicago. She is a passionate advocator for women in STEM and CS. Along with being a member of HackGuild, she is the co-captain of her FRC robotics team, which is where you will find her working after school! During her free time she loves to listen to music, hang out with friends and drink boba. "
      />
      <BioCard 
        headshot="https://images.ctfassets.net/qlhzmho4n1an/4b0eZsA2g9lF53adwDhJJ5/a4566220071aa09471b89c44e67c0567/headshot2.png" 
        name="Devika Roshan" 
        position="Public Relations: Marketing" 
        bio="Hi! My name is Devika, I'm a rising sophomore from the Bay Area, and I'm on the Marketing and PR team for HackGuild!  In my free time I like to spend time with my friends and family, watch movies, and attempt to cook. Feel free to reach out to me anytime (you can find me @devikaroshan_ on Instagram)!"
      />
      <BioCard 
        headshot="https://images.ctfassets.net/qlhzmho4n1an/6g3w6QexoSFtaBS01PJaPY/6de74a62cb734cbaa4074dcdb91917a7/BD142E8E-A27C-4010-B5F4-E604FDA9F3A8.jpg" 
        name="Caitlin Stanton" 
        position="Board Member and Mentor" 
        bio="Caitlin Stanton is a recent graduate of Cornell University and incoming Masters student in electrical and computer engineering. On campus she was the founding president of the Beta Chi chapter of the engineering sorority Alpha Omega Epsilon, and is currently an executive board member for Women in Computing at Cornell, a teaching assistant for the ECE department, and an undergraduate researcher for the Collective Embodied Intelligence lab. She's interned at places including Microsoft and Qualcomm, and is a hardware engineering intern at Lyft Level 5 in their autonomous vehicles division this summer. She's an advocate for diversity in tech through her public speaking and social media initiatives, and thoroughly enjoys opening up all kinds of students to the power of technology."
      />
      <BioCard 
        headshot="https://images.ctfassets.net/qlhzmho4n1an/1emuBfY0WWbkmIp9uRvMLU/45611f06b4d22d0c3e01f916b63d1759/headshotTranElle.jpg" 
        name="Elle Tran" 
        position="Public Relations: Content Creator" 
        bio="Hello! My name is Elle Tran and I am currently a rising second year at UC Berkeley studying Bioengineering and Electrical Engineering/Computer Science. As a woman in engineering, I often see computer science having a lack of representation from minority groups. Through HackGuild, I hope that this organization can be a source to empower and support the next generation in STEM. Currently, I work with the Public Relations team and I look forward to helping bring education to those striving to find resources in the field."
      />
      <BioCard 
        headshot="https://images.ctfassets.net/qlhzmho4n1an/79xgz875XErNqXFFaqLGRE/def966e96a436ec806f5db013c2fd97a/profliepic.jpg" 
        name="Anna Xia" 
        position="Public Relations: Social Media" 
        bio="Anna is a freshman at the University of Pennsylvania studying computer science and passionate about increasing accessibility to computer science education. At HackGuild, she works on the social media team, designing posts to spread awareness on the importance of diversity and accessibility to computer science education. Her other interests include volleyball, swimming, cooking, collecting stationary, robotics, and organizing the PennApps hackathon at UPenn. She is looking to explore data science, web design, and management in hopes of a career in software engineering or product management."
      />
      <BioCard 
        headshot="https://images.ctfassets.net/qlhzmho4n1an/6PoXG4MVy610DCdnRoy8Sk/d92b64722813c7917fbd112b081cf6d5/headshot.jpeg" 
        name="Lauren Zaidel" 
        position="Public Relations: Social Media" 
        bio="Lauren Zaidel is a rising junior at Palisades Charter High School in Los Angeles, California. She loves coding and STEM, and she’s interested in all things tech! She’s passionate about making sure all voices are heard -  especially representing girls and diverse racial backgrounds in the field. Lauren works on the PR team, writing blog posts and helping with social media management. She’s excited to be involved with Hackguild and help in any way she can!"
      />
      {/* {bios.map((Biography, index) => 
      <BioCard key={`${index++}`} headshot={Biography.node.headshot.file.url} name={Biography.node.name} position={Biography.node.position} biography={Biography.node.biography.biography} />
      )} */}
    </div>
  )
}
