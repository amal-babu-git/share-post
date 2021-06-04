import { Grid } from '@material-ui/core'
import React from 'react'

function Layout() {
    return (
        <Grid
            
        container
        direction="column"
        justify="center"
        alignItems="center"
        
        >
            
            <Grid item sm={6} xs={12}  >
                Login
            </Grid>
            <Grid item sm={6} xs={12}  >
                Login
            </Grid>
            

        </Grid>


    )
}

export default Layout
