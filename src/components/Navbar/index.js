import React from "react"
import Link from "gatsby-link"
import styles from "./styles.module.css"

export default () => {
  return (
    <nav className={styles.container}>
      <ul className={styles.menu}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/resume">Resume</Link>
        </li>
      </ul>
      <div className={styles.menuIcon} />
    </nav>
  )
}
