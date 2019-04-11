import React from "react"
// import Link from "gatsby-link"
import styles from "./styles.module.css"
import data from "../../../static/data/resume.json"
// import SectionLabel from "./SectionLabel"
import Section from "./Section"
import Experience from "./Experience"
import Project from "./Project"
import Skill from "./Skill"

export default () => (
  <div className={styles.container}>
    <div className={styles.main}>
      <Section label="Professional Summary">
        <p className={styles.summary}>{data.summary}</p>
      </Section>
      <Section label="Experience">
        {data.experience.map(({ role }) => {
          return <Experience role={role} />
        })}
      </Section>
      <Section label="Recent Projects">
        {data.projects.map(({ project }) => {
          return <Project project={project} />
        })}
      </Section>
    </div>
    <div className={styles.sidebar}>
      <Section label="Connect">
        <p>
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
        </p>
        <p className={styles.portfolioLabel}>
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
        </p>
      </Section>
      <Section label="Technical Skills">
        {data.skills.map(({ skill }) => {
          return <Skill skill={skill} />
        })}
      </Section>
      <Section label="Education">
        <div className={styles.roleHeader}>
          <div>
            <span className={styles.roleTitle}>{data.education.school}</span>
          </div>
        </div>
        <p className="">
          {data.education.degree} <br /> {data.education.detail}
        </p>
      </Section>
    </div>
  </div>
)
