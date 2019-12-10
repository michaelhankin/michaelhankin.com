import React from "react"

import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <main>
    <SEO title="Michael Hankin" />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <h1>Michael Hankin</h1>
    <h2>Software Engineer</h2>
    <ul>
      <li>Email</li>
      <li>Resume</li>
      <li>GitHub</li>
      <li>LinkedIn</li>
    </ul>
  </main>
)

export default IndexPage
