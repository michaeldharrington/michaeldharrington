import React from "react"
import Layout from "../components/Layout"
// import ProjectFeature from "../components/ProjectFeature"
import ProjectHeader from "../components/ProjectHeader"
import ProjectDetails from "../components/ProjectDetails"
import Helmet from "react-helmet"

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
        <h4>Role</h4>
        <p>Product Designer</p>
      </div>
      <div>
        <h4>Timeline</h4>
        <p>Aug 2018 - Present</p>
      </div>
      {/* <div>
        <h4>Code Sample</h4>
        <p>info</p>
      </div> */}
      <div>
        <h4>Live Project</h4>
        <p>
          <a
            href="https://impakt.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://impakt.app
          </a>
        </p>
      </div>
    </ProjectDetails>
    <div className="intro">
      <p>
        Currently under development, Impakt is a browser extension that helps
        consumers align their purchases to their values by providing ethical
        reports on products directly in the browser.
      </p>
    </div>
    <div className="content">
      <h3>Existing research, new challenges.</h3>
      <p>
        Impakt was initially designed with . Following the successful crowd
        funding, product focus shifted toward the technical challenges of
        implementing on
      </p>
    </div>
  </Layout>
)
