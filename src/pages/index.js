import React from "react"
import { Mail, Linkedin, GitHub, FileText } from "react-feather"

import Layout from "../components/layout"

import "./styles.scss"

const IndexPage = () => (
  <Layout>
    <div class="columns is-centered is-vcentered">
      <div class="column is-narrow">
        <figure className="image avatar">
          <img className="is-rounded" src="/me.png" alt="Michael Hankin" />
        </figure>
        <h1 className="title">Michael Hankin</h1>
        <h2 className="subtitle">Software Engineer</h2>
        <ul>
          <li>
            <a className="icon" href="mailto:mhankin@utexas.edu">
              <Mail />
            </a>
          </li>
          <li>
            <a className="icon" href="/resume.pdf">
              <FileText />
            </a>
          </li>
          <li>
            <a className="icon" href="https://github.com/michaelhankin">
              <GitHub />
            </a>
          </li>
          <li>
            <a className="icon" href="https://linkedin.com/in/michaelhankin">
              <Linkedin />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </Layout>
)

export default IndexPage
