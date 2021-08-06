import * as React from "react"
import Navbar from "../components/navbar"
import Home from "../pages/home"
import SkillsDesktop from "../pages/skillsDesktop"
import SkillsMobile from "../pages/skillsMobile"
import Projects from "../pages/projects"

import { MobileOnlyView, TabletView, BrowserView } from "react-device-detect";

//npm: devices detect resource: https://www.npmjs.com/package/react-device-detect

import "../styles/global.scss"

const IndexPage = () => (
	<div style={{backgroundColor: "#0A192F"}}>
		<Navbar />
		<Home />

		<MobileOnlyView>
			<SkillsMobile />
		</MobileOnlyView>

		<TabletView>
			<SkillsDesktop />
		</TabletView>

		<BrowserView>
			<SkillsDesktop />
		</BrowserView>

		<Projects />
	</div>
)

export default IndexPage
