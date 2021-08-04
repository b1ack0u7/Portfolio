import * as React from "react"
import Navbar from "../components/navbar"
import Home from "../pages/home"
import Skills from "../pages/skills"
import Projects from "../pages/projects"

import "../styles/global.scss"

const IndexPage = () => (
  <div style={{backgroundColor: "#0A192F"}}>
    <Navbar />
    <Home />
    <Skills />
    <Projects />
    {/* <Footer /> */}
  </div>
)

export default IndexPage
