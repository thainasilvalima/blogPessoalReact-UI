import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material';
import './Footer.css'

function Footer() {
    return (
        <>

            <Grid alignItems="center" item xs={12} container direction="row" justifyContent="center" className='ft'>
                <Box>
                    <Typography variant="subtitle2" align="center" gutterBottom >© 2023 Copyright: </Typography>
                </Box>
            </Grid>

        </>
    )
}

export default Footer;