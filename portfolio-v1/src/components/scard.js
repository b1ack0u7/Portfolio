import React from 'react'
import { Grid } from '@material-ui/core'
import Icon from "../components/icons"

import "../styles/scard.scss"

function AUXscard(inherited) {
    return (
        <div className="SC--AUX" style={{width: inherited.loop === 3 ? "100%" : "", justifyContent: inherited.loop === 3 ? "center" : ""}}>
            <div style={{paddingRight: "1.3vw"}}>
                <Icon name={inherited.tech}/>
            </div>
            
            <p>{inherited.tech}</p>
        </div>
    )
}

function Variant(inherited) {
    switch (inherited.loop) {
        case 2:
            return (
                <Grid container style={{marginLeft: "1vw", marginTop: "1.03vw", flexWrap: "nowrap", paddingRight: "8.26vw"}}>
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
                <Grid container style={{marginTop: "1.5vw"}}>
                    <Grid item xs>
                        <AUXscard tech={inherited.techs[0]} loop={inherited.loop}/>
                    </Grid>
                </Grid>
            );

        default:
            return (
                <Grid container style={{marginLeft: "1.76vw", marginTop: "1.03vw"}}>
                    {inherited.techs.map((res) =>(
                        <Grid item xs>
                            <AUXscard tech={res}/>
                        </Grid>
                    ))}
                </Grid>
            );
    }
}

export default function scard(props) {
    return (
        <div className="SC--container" style={{height: props.loop === 3 ? "27vw" : ""}}>
            <div className="SC--inner-container">
                <h1>{props.title}</h1>
                {props.icon}

                <div className="SC--desc" style={{marginTop: "-0.8vw", height: props.loop === 3 ? "3.66vw" : ""}}>
                    <h2>{props.desc}</h2>
                </div>

                <h1 style={{marginTop: "-0.1vw"}}>{props.subtitle}</h1>

                <hr/>

                <Variant techs={props.techs} loop={props.loop} />
            </div>
        </div>
    )
}
