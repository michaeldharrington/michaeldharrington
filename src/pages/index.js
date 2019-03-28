import React from "react"
import Layout from "../components/Layout"
import Grid from "../components/Grid"

export default () => (
  <Layout>
    <div className="page-header">
      <h1>Hi, my name is Michael D Harrington.</h1>
      <p>
        I work on design & development at{" "}
        <a
          href="https://peardesign.co"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pear Design
        </a>
        .
      </p>
    </div>
    <Grid />
  </Layout>
)
