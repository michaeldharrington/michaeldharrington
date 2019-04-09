import React from "react"
import Layout from "../components/Layout"
import ProjectFeature from "../components/ProjectFeature"
import ProjectHeader from "../components/ProjectHeader"
import ProjectDetails from "../components/ProjectDetails"

import feature from "../../static/images/karabinchak/karabinchak-tile.png"

export default () => (
  <Layout>
    <ProjectHeader
      title="Assemblyman Robert Karabinchak"
      subtitle="Robert Karabinchak is an elected legislator in New Jersey's State Assembly, representing the 18th Legislative District. I was brought on by the Communications team to design and build a constituent services website ."
    />
    <ProjectFeature img={feature} class="karabinchakFeature" />
    <ProjectDetails>
      <div>
        <h4>Role & Tools</h4>
        <p>info</p>
      </div>
      <div>
        <h4>Timeline</h4>
        <p>info</p>
      </div>
      {/* <div>
        <h4>Code Sample</h4>
        <p>info</p>
      </div> */}
      <div>
        <h4>Live Project</h4>
        <p>
          <a
            href="https://mariformi.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://mariformi.com
          </a>
        </p>
      </div>
    </ProjectDetails>
  </Layout>
)
