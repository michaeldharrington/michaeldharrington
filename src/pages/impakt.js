import React from "react"
import Layout from "../components/Layout"
import Image from "../components/Image"
import ProjectHeader from "../components/ProjectHeader"
import ProjectDetails from "../components/ProjectDetails"

// import feature from "../../static/images/impakt/impakt-tile.png"

export default () => (
  <Layout>
    <ProjectHeader
      title="Impakt"
      subtitle="We'll put a little mountain here. We all need a friend. That's one of those happy accidents. You can do anything that you believe you can do."
    />
    {/* <Image img={feature} class="impaktTile" /> */}
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
