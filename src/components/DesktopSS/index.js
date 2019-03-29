import React from "react"
import styles from "./styles.module.css"

export default ({ img, caption }) => (
  <div className={styles.container}>
    <div className={styles.wrapper}>
      <img src={img} alt="" />
      <p>
        <small>{caption}</small>
      </p>
    </div>
  </div>
)
