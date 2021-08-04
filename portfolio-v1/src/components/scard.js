import React from 'react'
import { Grid } from '@material-ui/core'
import Icon from "../components/icons"
import GetDimensions from "../components/hooks/useWindowDimensions"

import "../styles/scard.scss"

function AUXscard(inherited) {
    return (
        <div className="SC--AUX" style={{width: inherited.loop === 3 ? "100%" : "", justifyContent: inherited.loop === 3 ? "center" : ""}}>
            <div style={{paddingRight: "15px"}}>
                <Icon name={inherited.tech}/>
            </div>
            
            <p>{inherited.tech}</p>
        </div>
    )
}

function VariantsDesktop(inherited) {
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

function Desktop(props) {
    return (
        <div className="SC--container" style={{height: props.loop === 3 ? "355px" : ""}}>
            <div className="SC--inner-container">
                <div style={{paddingTop: "6px"}}>
                    <h1>{props.title}</h1>
                    {props.icon}

                    <div className="SC--desc" style={{marginTop: "-5px", height: props.loop === 3 ? "50px" : ""}}>
                        <h2>{props.desc}</h2>
                    </div>

                    <h1 style={{marginTop: "1px"}}>{props.subtitle}</h1>

                    <hr/>

                    <VariantsDesktop techs={props.techs} loop={props.loop} />
                </div>
            </div>
        </div>
    );
}

function Mobile(props) {
    return (
        <div className="SC--container">
            <div className="SC--inner-container">
                <div>
                    <h1>{props.title}</h1>

                    <div className="SC--desc">
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
        </div>
    );
}

export default function scard(passed) {
    const { height, width } = typeof window !== `undefined` ? GetDimensions() : [100,390] ;

    if(width <= 390) {
        return (
            <Mobile title={passed.title} desc={passed.desc} subtitle={passed.subtitle} techs={passed.techs} icon={passed.icon} loop={passed.loop}/>
        );
    }
    else {
        return (
            <Desktop title={passed.title} desc={passed.desc} subtitle={passed.subtitle} techs={passed.techs} icon={passed.icon} loop={passed.loop}/>
        );
    }
}
