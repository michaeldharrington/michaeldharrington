import React from "react"
import Layout from "../components/Layout"

import Resume from "../components/Resume"

export default () => (
  <Layout>
    <div className="page-header">
      <h1>Design-focused frontend developer</h1>
      <a
        href="https://github.com/michaeldharrington/resume/raw/master/MichaelDHarrington.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download as PDF
      </a>
    </div>
    <Resume />
  </Layout>
)
