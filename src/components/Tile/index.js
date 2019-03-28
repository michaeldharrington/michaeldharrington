import React from "react"
import Link from "gatsby-link"
import styles from "./styles.module.css"

const Tile = props => {
  return (
    <Link
      to={props.link}
      className={styles.container}
      style={{
        backgroundColor: props.bg,
        backgroundImage: `url(${props.image})`,
      }}
    >
      <div
        className={styles.overlay}
        style={{
          backgroundColor: props.overlay,
        }}
      >
        <div className={styles.info}>
          <h3 className={styles.title}>{props.title}</h3>
          <p className={styles.details}>{props.details}</p>
        </div>
      </div>
    </Link>
  )
}

export default Tile
