import React from 'react'
import { Grid } from '@material-ui/core'
import PCards from "../components/pcard"
import { Projects } from "../data"

import "../styles/projects.scss"

export default function projects() {
    return (
        <div className="PR--container">
            <div className="PR--divider">
                <Grid container>
                    <Grid item xs>
                        <hr className="PR--divider__bar" />
                    </Grid>
                    <Grid item xs={4}>
                        <p>Projects</p>
                    </Grid>
                    <Grid item xs>
                        <hr className="PR--divider__bar" />
                    </Grid>
                </Grid>
            </div>

            <div className="PR--cards">
                {Projects.map(({ title, subtitle, status, statusID, techs }, i) => (
                    <PCards title={title} subtitle={subtitle} status={status} statusID={statusID} techs={techs} />
                ))}
            </div>
        </div> 
    )
}
