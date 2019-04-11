import React from "react"
import styles from "./styles.module.css"

export default props => {
  const { skill } = props
  return (
    <div className={styles.container}>
      <p className={styles.label}>{skill.label}</p>
      <ul className={styles.list}>
        {skill.list.map(({ value }) => {
          return <li className={styles.skill}>{value}</li>
        })}
      </ul>
    </div>
  )
}
