import React from "react"
import Layout from "../components/Layout"
import ProjectFeature from "../components/ProjectFeature"

import feature from "../../static/images/haf/Full.png"
import ProjectDetails from "../components/ProjectDetails"
import ProjectHeader from "../components/ProjectHeader"
import ProjectImage from "../components/ProjectImage"
import app from "../../static/images/haf/haf-tile.png"

export default () => (
  <Layout>
    <ProjectHeader
      title="Happy Active Family"
      subtitle="Curated lifestyle activities, editorial, and products sourced on a platform built for families looking to invite, share, and explore."
    />
    <ProjectFeature img={feature} class="hafImage" />
    <ProjectDetails>
      <div>
        <h4>Role & Tools</h4>
        <p>info</p>
      </div>
      <div>
        <h4>Timeline</h4>
        <p>info</p>
      </div>
      <div>
        <h4>Code Sample</h4>
        <p>info</p>
      </div>
      <div>
        <h4>Live Project</h4>
        <p>info</p>
      </div>
    </ProjectDetails>
    <div className="content">
      <h3>Brand</h3>
      <p>content</p>
      <ProjectImage src={feature} alt="Happy Active Family Brand image" />
    </div>
    <div className="content">
      <h3>Desktop / Components</h3>
      <p>content</p>
    </div>
    <div className="content">
      <h3>App Design</h3>
      <p>content</p>
      <ProjectImage src={app} alt="Happy Active Family App Designs" />
    </div>
  </Layout>
)
