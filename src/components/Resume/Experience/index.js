import React from "react"
import styles from "./styles.module.css"

export default props => {
  const { role } = props
  return (
    <div className={styles.role} key={role.title}>
      <div className={styles.header}>
        <span>
          <span className={styles.title}>{role.title}</span>
          <span className={styles.company}>
            <a
              href={role.company.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {role.company.name}
            </a>
          </span>
        </span>
        <span className={styles.date}>{role.date}</span>
      </div>
      <ul className={styles.roleDetailList}>
        {role.details.map(({ detail }) => {
          return (
            <li className={styles.roleDetail} key={detail}>
              <p>{detail}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
