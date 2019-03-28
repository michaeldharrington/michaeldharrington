import React from "react"
import styles from "./styles.module.css"

export default props => (
  <div className={styles.container}>
    <h4 className={styles.text}>{props.section}</h4>
  </div>
)
