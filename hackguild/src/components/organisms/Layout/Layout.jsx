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
        {/* <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer> */}
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}