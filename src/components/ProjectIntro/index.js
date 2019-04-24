import React from "react"
import styles from "./styles.module.css"

export default props => (
  <div className={styles.container}>
    <p>{props.content}</p>
  </div>
)
