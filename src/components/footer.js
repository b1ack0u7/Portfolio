import React from 'react'
import { Grid } from '@material-ui/core'
import "../styles/footer.scss"

export default function footer() {
    return (
        <div className="FT--container">
            <Grid container style={{flexWrap: "nowrap"}}>
                <Grid container direction="column">
                    <Grid item xs>
                        <p>item1</p>
                    </Grid>
                    <Grid item xs>
                        <p>item2</p>
                    </Grid>
                    <Grid item xs>
                        <p>item3</p>
                    </Grid>
                </Grid>

                <Grid container direction="column" alignItems="flex-end">
                    <Grid item xs>
                        <p>item4</p>
                    </Grid>
                    <Grid item xs>
                        <p>item5</p>
                    </Grid>
                    <Grid item xs>
                        <p>item6</p>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}
