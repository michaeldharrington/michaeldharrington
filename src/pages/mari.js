import React from "react"
import Layout from "../components/Layout"
import ProjectFeature from "../components/ProjectFeature"
import ProjectHeader from "../components/ProjectHeader"
import ProjectDetails from "../components/ProjectDetails"
import DesktopSS from "../components/DesktopSS"

import feature from "../../static/images/mari/mari_desktop--feature.png"
import MariBrandBlue from "../../static/images/mari/Mari_Logo_Blue.png"
import ButtonsBanner from "../../static/images/mari/Mari_ButtonsBanner.png"
import StyleGuide from "../../static/images/mari/StyleGuide.png"
import Desktop1 from "../../static/images/mari/mari_desktop1.png"
import Desktop2 from "../../static/images/mari/mari_desktop2.png"
import Desktop3 from "../../static/images/mari/mari_desktop3.png"
import Desktop4 from "../../static/images/mari/mari_desktop4.png"
import Desktop5 from "../../static/images/mari/mari_desktop5.png"
import ProjectIntro from "../components/ProjectIntro"
import ProjectImage from "../components/ProjectImage"

export default () => (
  <Layout>
    <ProjectHeader
      title="Mari for Michigan"
      subtitle="
        Mari Manoogian is a newly elected State Representative serving Michigan's 40th House District.
        I was brought on by the candidate to develop a brand identity and campaign website.  
      "
    />
    <ProjectFeature img={feature} class="mariImage" />
    <ProjectDetails>
      <div>
        <h4>Role</h4>
        <p>Designer / Developer</p>
      </div>
      <div>
        <h4>Timeline</h4>
        <p>Aug 2017 - April 2018</p>
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
    {/* <ProjectIntro
      content="
        The central branding challenge was to establish a brand identity 
        which built credibility and trust in a first-time candidate,
        while still invoking smart, fresh and youthful qualities. 
      "
    /> */}
    <div className="intro">
      <p>intro</p>
    </div>
    <div className="content">
      <h3>Creating an identity</h3>
      <p>
        The central branding challenge was to establish an identity which built
        credibility and trust in a first-time candidate, while still invoking
        smart, fresh and youthful qualities.
      </p>
      <ProjectImage src={MariBrandBlue} alt="Logo for Mari for Michigan" />
      <ProjectImage src={StyleGuide} alt="Style guide for Mari for Michigan" />
      <ProjectImage
        src={ButtonsBanner}
        alt="Design Assets for Mari for Michigan"
      />
    </div>
    <div className="content">
      <h3>Website</h3>
      <p>
        The campaign website was created to provide news and information about
        the campaign, along with prominent calls to support the campaign by
        volunteering or donation. The site was designed in{" "}
        <a href="https://figma.com" target="_blank">
          Figma
        </a>{" "}
        and built in{" "}
        <a href="https://gohugo.io" target="_blank">
          Hugo
        </a>
        , an open-source static site framework which uses Golang templating to
        render markdown into HTML.
      </p>
      <p>
        Multiple content types for campaign Endorsements, Press Releases,
        Campaign Updates, News, and Priorities, were all built through
        List/index pages, with individual pages generated on markdown
        templating. This allowed the campaign to curate lists of content by
        category, tag or any taxonomy they would choose, including location,
        issue or keyword.
      </p>
      <p>
        With a tight development budget and simple content requirements, a
        third-party CMS like{" "}
        <a href="https://forestry.io" target="_blank">
          Forestry.io
        </a>{" "}
        was a clear benefit to the project, allowing for content editors to
        publish markdown files to a single repo, triggering site builds through
        webhooks on each committed content change.
      </p>
    </div>

    <DesktopSS img={Desktop1} />
    <DesktopSS img={Desktop2} />
    <DesktopSS img={Desktop3} />
    <DesktopSS img={Desktop4} />
    <DesktopSS img={Desktop5} />
  </Layout>
)
