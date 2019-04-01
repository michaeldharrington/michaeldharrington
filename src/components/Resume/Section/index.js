import React, { Component } from "react"
import styles from "./styles.module.css"

import SectionLabel from "../SectionLabel"

export class Section extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: true,
    }
  }

  toggleActive() {
    this.setState(state => ({
      active: !state.active,
    }))
  }

  render() {
    const { label, children } = this.props
    const { active } = this.state
    return (
      <section className={styles.container}>
        <SectionLabel section={label} />
        {active ? <>{children}</> : <></>}
      </section>
    )
  }
}

export default Section
