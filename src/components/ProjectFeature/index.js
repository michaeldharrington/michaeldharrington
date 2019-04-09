import React from "react"
import styles from "./styles.module.css"

export default props => (
  <div
    style={{
      backgroundImage: `url(${props.img})`,
    }}
    className={`${styles.container} + ${props.class}`}
  />
)
