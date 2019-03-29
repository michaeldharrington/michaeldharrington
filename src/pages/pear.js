import React from "react"
import Layout from "../components/Layout"
import ProjectHeader from "../components/ProjectHeader"
import ProjectDetails from "../components/ProjectDetails"
import Image from "../components/Image"
import feature from "../../static/images/peardesign/feature5.png"

export default () => (
  <Layout>
    <ProjectHeader
      title="Pear Design"
      subtitle="We'll put a little mountain here. We all need a friend. That's one of those happy accidents. You can do anything that you believe you can do."
    />
    <Image img={feature} class="hafImage" />
    <ProjectDetails>
      <div>
        <h4>Role & Tools</h4>
        <p>info</p>
      </div>
      {/* <div>
        <h4>Timeline</h4>
        <p>info</p>
      </div> */}
      <div>
        <h4>Code Sample</h4>
        <p>
          <a
            href="https://github.com/michaeldharrington/peardesign"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub.com
          </a>
        </p>
      </div>
      <div>
        <h4>Live Project</h4>
        <p>
          <a
            href="https://peardesign.co"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://peardesign.co
          </a>
        </p>
      </div>
    </ProjectDetails>
    <DesktopSS img="" caption="" />
  </Layout>
)
