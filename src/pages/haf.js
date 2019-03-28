import React from "react"
import Layout from "../components/Layout"
import Image from "../components/Image"

import photo from "../../static/images/haf/Full.png"
import ProjectDetails from "../components/ProjectDetails"
import ProjectHeader from "../components/ProjectHeader"

export default () => (
  <Layout>
    <ProjectHeader
      title="Happy Active Family"
      subtitle="We'll put a little mountain here. We all need a friend. That's one of those happy accidents. You can do anything that you believe you can do."
    />
    <Image img={photo} class="hafImage" />
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
  </Layout>
)
