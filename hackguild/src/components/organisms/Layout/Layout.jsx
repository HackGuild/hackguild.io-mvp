import React from "react"
import PropTypes from "prop-types"

import { Header, Footer } from "./../../molecules"
import "./Layout.scss"

export default function Layout({children}) {
  return (
    <>
      <Header />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}