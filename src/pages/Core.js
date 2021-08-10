import React from 'react';
import "../styles/global.scss";

import Navbar from "../components/navbar";
import Home from "./Home"
import Skills from "./Skills"
import Projects from "./Projects"

function App() {
  return (
    <div style={{backgroundColor: "#0A192F"}}>
		<Navbar />
		<Home />
		<Skills />
		<Projects />
	</div>
  );
}

export default App;