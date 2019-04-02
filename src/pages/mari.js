import React from "react"
import Layout from "../components/Layout"
import Image from "../components/Image"

import photo from "../../static/images/mari/mari_desktop--feature.png"
import ProjectDetails from "../components/ProjectDetails"
import ProjectHeader from "../components/ProjectHeader"
import DesktopSS from "../components/DesktopSS"
import Desktop1 from "../../static/images/mari/mari_desktop1.png"
import Desktop2 from "../../static/images/mari/mari_desktop2.png"
import Desktop3 from "../../static/images/mari/mari_desktop3.png"
import Desktop4 from "../../static/images/mari/mari_desktop4.png"
import Desktop5 from "../../static/images/mari/mari_desktop5.png"

export default () => (
  <Layout>
    <ProjectHeader
      title="Mari for Michigan"
      subtitle="We'll put a little mountain here. We all need a friend. That's one of those happy accidents. You can do anything that you believe you can do."
    />
    <Image img={photo} class="mariImage" />
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
    <DesktopSS img={Desktop1} caption="About page" />
    <DesktopSS img={Desktop2} />
    <DesktopSS img={Desktop3} />
    <DesktopSS img={Desktop4} />
    <DesktopSS img={Desktop5} />
  </Layout>
)