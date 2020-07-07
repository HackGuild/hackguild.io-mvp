import React from "react"
import Helmet from "react-helmet"
import { About, Team, Layout } from "../components/organisms"


const about = () => {
  return (
    <>
      <Helmet>
        <title>HackGuild: increasing access to tech education</title>
        <meta name="description" content="A global nonprofit dedicated to expanding access to tech education to underserved communities and empowering the next generation of innovators, computer scientists, and tech professionals." />
      </Helmet>
      <Layout>
        <About/>
        <Team/>
      </Layout>
    </>
  )
}
export default about
