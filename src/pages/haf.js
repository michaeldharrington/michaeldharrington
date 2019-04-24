import React from "react"
import Layout from "../components/Layout"
import ProjectFeature from "../components/ProjectFeature"

import feature from "../../static/images/haf/Full.png"
import ProjectDetails from "../components/ProjectDetails"
import ProjectHeader from "../components/ProjectHeader"
import ProjectImage from "../components/ProjectImage"

import DesktopSS from "../components/DesktopSS"

import app from "../../static/images/haf/haf-tile.png"
import appMocksPlan from "../../static/images/haf/Group_Plan.png"
import appMocksProduct from "../../static/images/haf/Group_Product.png"
import appMocksSearch from "../../static/images/haf/Group_Search.png"
import appMocksSharing from "../../static/images/haf/Group_Sharing.png"

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
        <p>Nov 2018 - Present</p>
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
      <h3>Discovery</h3>
      <p>content</p>
      <DesktopSS img={appMocksSearch} alt="Happy Active Family App Designs" />
    </div>
    <div className="content">
      <h3>Sharing</h3>
      <p>content</p>
      <ProjectImage
        src={appMocksSharing}
        alt="Happy Active Family App Designs"
      />
    </div>
    <div className="content">
      <h3>Creating a plan</h3>
      <p>content</p>
      <ProjectImage src={appMocksPlan} alt="Happy Active Family App Designs" />
    </div>
    <div className="content">
      <h3>Product</h3>
      <p>content</p>
      <ProjectImage
        src={appMocksProduct}
        alt="Happy Active Family App Designs"
      />
    </div>
  </Layout>
)
