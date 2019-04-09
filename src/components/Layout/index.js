import React from "react"
import Helmet from "react-helmet"
import "../../../static/normalize.css"
import "../../../static/global.css"
import styles from "./styles.module.css"

import Navbar from "../Navbar"
import Footer from "../Footer"

const Layout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Helmet>
        <title>Michael D Harrington</title>
      </Helmet>
      <div className={styles.container}>
        <Navbar />
        <div className={styles.content}>{children}</div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
