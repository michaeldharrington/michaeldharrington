import React from "react"
import Layout from "../components/Layout"
import ProjectHeader from "../components/ProjectHeader"
import ProjectDetails from "../components/ProjectDetails"
import ProjectFeature from "../components/ProjectFeature"
import DesktopSS from "../components/DesktopSS"
import ProjectImage from "../components/ProjectImage"

import feature from "../../static/images/peardesign/logo_background.png"
import PDDesktopHome from "../../static/images/peardesign/PD_ss_home.png"
import PDDesktopEWCC from "../../static/images/peardesign/PD_ss_ewcc.png"
import PDDesktopContact from "../../static/images/peardesign/PD_ss_contact.png"
import StyleGuide from "../../static/images/peardesign/StyleGuide3.png"

export default () => (
  <Layout>
    <ProjectHeader
      title="Pear Design"
      subtitle="We'll put a little mountain here. We all need a friend. That's one of those happy accidents. You can do anything that you believe you can do."
    />
    <ProjectFeature img={feature} class="hafImage" />
    <ProjectDetails>
      <div>
        <h4>Role</h4>
        <p>Designer / Developer</p>
      </div>
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
    <div className="content">
      <h3>Brand</h3>
      <p>content</p>
      <ProjectImage src={StyleGuide} alt="Pear Design Style Guide" />
      <h3>Website</h3>
      <p>content</p>
    </div>
    <DesktopSS img={PDDesktopHome} caption="" />
    <DesktopSS img={PDDesktopEWCC} caption="" />
    <DesktopSS img={PDDesktopContact} caption="" />
  </Layout>
)
