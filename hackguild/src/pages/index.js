import React from "react"
import Helmet from "react-helmet"
import { Layout, Landing, Support, Mission, Statistics } from "../components/organisms"

const home = () => {
  return (
    <>
      <Helmet>
        <title>HackGuild: increasing access to tech education</title>
        <meta name="description" content="A global nonprofit dedicated to expanding access to tech education to underserved communities and empowering the next generation of innovators, computer scientists, and tech professionals." />
      </Helmet>
      <Layout>
        <Landing />
        <Mission />
        <Statistics />
        <Support />
      </Layout>
    </>
  )
}
export default home
