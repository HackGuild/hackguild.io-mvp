import React from "react"
import { Layout, Landing, Support, Mission, Statistics } from "../components/organisms"

const home = () => {
  return (
    <>
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
