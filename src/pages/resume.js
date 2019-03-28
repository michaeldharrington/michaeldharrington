import React from "react"
import Layout from "../components/Layout"

import Resume from "../components/Resume"

export default () => (
  <Layout>
    <div className="page-header">
      <h1>Design-focused frontend developer</h1>
      <p>Download as PDF</p>
    </div>
    <Resume />
  </Layout>
)
