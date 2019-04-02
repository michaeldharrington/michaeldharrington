import React, { Component } from "react"
import Link from "gatsby-link"
import styles from "./styles.module.css"
import Menu from "../../../static/icons/Menu"

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = { active: false }

    this.toggleActive = this.toggleActive.bind(this)
  }

  toggleActive() {
    this.setState(state => ({
      active: !state.active,
    }))
  }

  render() {
    const { active } = this.state
    return (
      <nav className={styles.container}>
        {active ? (
          <ul className={styles.menu}>
            <li>
              <Link to="/" activeClassName={styles.active}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" activeClassName={styles.active}>
                About
              </Link>
            </li>
            <li>
              <Link to="/resume" activeClassName={styles.active}>
                Resume
              </Link>
            </li>
          </ul>
        ) : (
          <></>
        )}

        {/* <div className={styles.menuIcon} /> */}
        <Menu className={styles.menuIcon} onClick={this.toggleActive} />
      </nav>
    )
  }
}

export default Navbar
