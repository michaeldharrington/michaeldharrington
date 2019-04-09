import React from "react"
import Layout from "../components/Layout"

export default () => (
  <Layout>
    <div className="page-header">
      <h1>
        I'm a designer and developer based in Colorado, working at{" "}
        <a
          href="https://peardesign.co"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pear Design
        </a>
        .
      </h1>
      <p>
        You can make bad jokes with me on{" "}
        <a
          href="https://twitter.com/mdharrington_"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
        , or
      </p>
    </div>
    {/* <div className="content">
      <p>
        I graduated from Rutgers University, with a degree in Geography and
        Urban Planning.
      </p>
      <p>
        I grew up in New Jersey, and have lived in Portland, OR and Washington
        D.C.
      </p>
    </div> */}
  </Layout>
)
