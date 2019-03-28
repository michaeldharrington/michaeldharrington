import React from "react"
import styles from "./styles.module.css"

export default props => (
  <div className={styles.container}>
    <h1>{props.title}</h1>
    <p>{props.subtitle}</p>
  </div>
)
