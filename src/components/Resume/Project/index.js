import React from "react"
import styles from "./styles.module.css"

export default props => {
  const { project } = props
  return (
    <div className={styles.project}>
      <div className={styles.projectHeader}>
        <Link className={styles.title} to={`/${project.link}`}>
          {project.title}
        </Link>
        <div className={styles.date}>{project.date}</div>
      </div>
      <ul className={styles.projectDetails}>
        {project.details.map(({ detail }) => {
          return (
            <li className={styles.projectDetail}>
              <p>{detail}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
