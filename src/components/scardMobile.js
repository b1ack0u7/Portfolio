import React from 'react'
import { Grid } from '@material-ui/core'
import Icon from "./icons"

import "../styles/scard.scss"

export default function scardMobile(props) {
    return (
        <div className="SC--container">
            <div className="SC--inner-container">
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
    )
}
