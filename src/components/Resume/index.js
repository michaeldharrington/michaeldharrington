import React from "react"
import Link from "gatsby-link"
import styles from "./styles.module.css"
import data from "../../../static/data/resume.json"
import SectionLabel from "./SectionLabel"

export default () => (
  <div className={styles.container}>
    <div className={styles.main}>
      <section>
        <SectionLabel section="Professional Summary" />
        <p>{data.summary}</p>
      </section>
      <section>
        <SectionLabel section="Experience" />
        {data.experience.map(({ role }) => {
          return (
            <div className={styles.role} key={role.title}>
              <div className={styles.roleHeader}>
                <div>
                  <span className={styles.title}>{role.title}</span>
                  <span className={styles.company}>{role.company}</span>
                </div>
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
        })}
      </section>
      <section>
        <SectionLabel section="Recent Projects" />
        {data.projects.map(({ project }) => {
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
        })}
      </section>
    </div>
    <div className={styles.sidebar}>
      <section>
        <SectionLabel section="Connect" />
        <a
          href="https://www.linkedin.com/in/michaeldharrington/"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin.com/in/michaeldharrington
        </a>
        <br />
        <a
          href="https://github.com/michaeldharrington"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/michaeldharrington
        </a>
        <div className={styles.portfolioLabel}>
          This resume is written in{" "}
          <a
            href="https://github.com/michaeldharrington/resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            React/CSS Grid
          </a>
          , and previously{" "}
          <a
            href="https://github.com/michaeldharrington/resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            BEM SASS
          </a>
          .<br />
          <a
            href="https://github.com/michaeldharrington/resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source Code
          </a>{" "}
          -{" "}
          <a
            href="https://github.com/michaeldharrington/resume/blob/master/MichaelDHarrington.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            PDF
          </a>
        </div>
      </section>
      <section>
        <SectionLabel section="Technical Skills" />
        {data.skills.map(({ skill }) => {
          return (
            <div className={styles.skillContainer}>
              <h4 className={styles.skillListLabel}>{skill.label}</h4>
              <ul className={styles.skillList}>
                {skill.list.map(({ value }) => {
                  return <li className={styles.skill}>{value}</li>
                })}
              </ul>
            </div>
          )
        })}
      </section>
      <section>
        <SectionLabel section="Education" />
        <div className={styles.roleHeader}>
          <div>
            <span className={styles.roleTitle}>{data.education.school}</span>
          </div>
        </div>
        <p className="">
          {data.education.degree} <br /> {data.education.detail}
        </p>
      </section>
    </div>
  </div>
)
