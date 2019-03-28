import React from "react"
import styles from "./styles.module.css"

export default () => {
  return (
    <div className={styles.container}>
      <p>
        Write to{" "}
        <a href="mailto:me@michaeldharrington.com">
          me at michaeldharrington . com
        </a>
      </p>
      <p className={styles.links}>
        <a
          href="https://github.com/michaeldharrington"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{" "}
        ·{" "}
        <a
          href="https://twitter.com/mdharrington_"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>{" "}
        ·{" "}
        <a
          href="https://linkedin.com/in/michaeldharrington"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </p>
    </div>
  )
}
