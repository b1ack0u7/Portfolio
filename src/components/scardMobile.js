import React from 'react'
import { Grid } from '@material-ui/core'
import Icon from "./icons"
import "../styles/scardM.scss"

//npm: devices detect resource: https://www.npmjs.com/package/react-device-detect

export default function ScardMobile(props) {
    return (
        <div className="SCM--container">
            <div className="SCM--inner-container">
                <h1>{props.title}</h1>
    
                <div className="SCM--desc">
                    <h2>{props.desc}</h2>
                </div>
    
                <Grid container style={{padding: "0 10px"}}>
                    {props.techs.map((res, i) => (
                        <Grid key={i.toString()} item xs>
                            <Icon name={res}/>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    )
}
