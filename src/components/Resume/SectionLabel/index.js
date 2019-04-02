import React from "react"
import Chevron from "../../../../static/icons/Chevron"
import styles from "./styles.module.css"

export default props => (
  <div className={styles.container}>
    <h4 className={styles.text}>{props.section}</h4>
    <Chevron
      className={`${styles.button} + ${
        props.active ? styles.active : styles.hidden
      }`}
      onClick={props.toggle}
    />
  </div>
)
