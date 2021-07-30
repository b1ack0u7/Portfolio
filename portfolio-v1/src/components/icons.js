import React from 'react'
import Figma from "../images/skills/figma.png"
import HTML from "../images/skills/html.png"
import CSS from "../images/skills/css.png"
import PHP from "../images/skills/php.png"
import JavaScript from "../images/skills/javascript.png"
import MySQL from "../images/skills/mysql.png"
import Swift from "../images/skills/swift.png"
import Cplus from "../images/skills/c++.png"
import Python from "../images/skills/python.png"
import Bash from "../images/skills/bash.png"
import Git from "../images/skills/git.png"
import SwiftUI from "../images/skills/swiftui.png"

export default function icons(props) {
  switch (props.name) {
    case "Figma":
      return <img src={Figma} alt={props.name}/>
    case "HTML":
      return <img src={HTML} alt={props.name}/>
    case "CSS":
      return <img src={CSS} alt={props.name}/>

    case "PHP":
      return <img style={{marginTop: "0.65vw"}} src={PHP} alt={props.name}/>
    case "MySQL":
      return <img style={{marginTop: "0.35vw"}} src={MySQL} alt={props.name}/>
    case "JavaScript":
      return <img style={{marginTop: "0.2vw"}} src={JavaScript} alt={props.name}/>

    case "Swift":
      return <img src={Swift} alt={props.name}/>
    case "C++":
      return <img src={Cplus} alt={props.name}/>
    case "Python":
      return <img src={Python} alt={props.name}/>
    case "Bash":
      return <img src={Bash} alt={props.name}/>
    case "Git":
      return <img src={Git} alt={props.name}/>

    case "SwiftUI":
      return <img style={{marginTop: "0.5vw"}}  src={SwiftUI} alt={props.name}/>

    default:
      return " "
  }
}
