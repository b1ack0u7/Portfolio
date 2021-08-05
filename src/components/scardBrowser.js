import React from 'react'
import { Grid } from '@material-ui/core'
import Icon from "../components/icons"

import "../styles/scardBrowser.scss"

function AUXscard(inherited) {
    return (
        <div className="SCB--AUX" style={{width: inherited.loop === 3 ? "100%" : "", justifyContent: inherited.loop === 3 ? "center" : ""}}>
            <div style={{paddingRight: "15px"}}>
                <Icon name={inherited.tech}/>
            </div>
            
            <p>{inherited.tech}</p>
        </div>
    )
}

function TechsVariantsDesktop(inherited) {
    switch (inherited.loop) {
        case 2:
            return (
                <Grid container style={{marginLeft: "12px", marginTop: "15px", flexWrap: "nowrap", paddingRight: "110px"}}>
                    <Grid container>
                        <Grid item xs>
                            <AUXscard tech={inherited.techs[0]} loop={inherited.loop}/>
                        </Grid>
                        <Grid item xs>
                            <AUXscard tech={inherited.techs[1]} loop={inherited.loop}/>
                        </Grid>
                        <Grid item xs>
                            <AUXscard tech={inherited.techs[2]} loop={inherited.loop}/>
                        </Grid>
                    </Grid>

                    <Grid container>
                        <Grid item xs>
                            <AUXscard tech={inherited.techs[3]} loop={inherited.loop}/>
                        </Grid>
                        <Grid item xs>
                            <AUXscard tech={inherited.techs[4]} loop={inherited.loop}/>
                        </Grid>
                        <Grid item xs>
                            <AUXscard/>
                        </Grid>
                    </Grid>
                </Grid>
            );

        case 3:
            return (
                <Grid container style={{marginTop: "25px"}}>
                    <Grid item xs>
                        <AUXscard tech={inherited.techs[0]} loop={inherited.loop}/>
                    </Grid>
                </Grid>
            );

        default:
            return (
                <Grid container direction="column" style={{marginLeft: "24px", marginTop: "15px"}}>
                    {inherited.techs.map((res) =>(
                        <Grid item xs >
                            <AUXscard tech={res}/>
                        </Grid>
                    ))}
                </Grid>
            );
    }
}

export default function scardBrowser(props) {
    return (
        <div className="SCB--container" style={{height: props.loop === 3 ? "355px" : ""}}>
            <div className="SCB--inner-container">
                <div style={{paddingTop: "6px"}}>
                    <h1>{props.title}</h1>
                    {props.icon}

                    <div className="SCB--desc" style={{marginTop: "-5px", height: props.loop === 3 ? "50px" : ""}}>
                        <h2>{props.desc}</h2>
                    </div>

                    <h1 style={{marginTop: "1px"}}>{props.subtitle}</h1>

                    <hr/>

                    <TechsVariantsDesktop techs={props.techs} loop={props.loop} />
                </div>
            </div>
        </div>
    )
}
