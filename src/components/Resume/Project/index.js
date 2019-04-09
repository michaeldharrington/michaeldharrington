import React from "react"
import Link from "gatsby-link"
import styles from "./styles.module.css"

export default props => {
  const { project } = props
  return (
    <div className={styles.container}>
      <div className={styles.header}>
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
