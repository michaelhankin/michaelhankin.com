import React from "react"

import Avatar from "../components/avatar"
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Avatar />
    </div>
    <h1>Michael Hankin</h1>
    <h2>Software Engineer</h2>
    <p>
      Full-stack software engineer on the scheduling team at{" "}
      <a href="https://athenahealth.com/">athenahealth</a>. Studied computer
      science at{" "}
      <a href="https://utexas.edu/">The University of Texas at Austin</a>.
    </p>
    <ul>
      <li>
        <a href="mailto:mhankin@utexas.edu">Email</a>
      </li>
      <li>
        <a href="/resume.pdf">Resume</a>
      </li>
      <li>
        <a href="https://github.com/michaelhankin">GitHub</a>
      </li>
      <li>
        <a href="https://linkedin.com/in/michaelhankin">LinkedIn</a>
      </li>
    </ul>
  </Layout>
)

export default IndexPage
