import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

import './Footer.css'

function Footer() {
    return (
        <>

            <Grid alignItems="center" item xs={12} container direction="row" justifyContent="center" className='ft'>
                <Box>
                    <Typography variant="subtitle2" align="center" gutterBottom >© 2023 Copyright: </Typography>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center">
                    <a href="https://www.facebook.com/generationbrasil" target="_blank" rel="noopener noreferrer">
                        <FacebookIcon style={{ fontSize: 60, color: "white" }} />
                    </a>
                    <a href="https://www.instagram.com/generationbrasil/" target="_blank" rel="noopener noreferrer">
                        <InstagramIcon style={{ fontSize: 60, color: "white" }} />
                    </a>
                    <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon style={{ fontSize: 60, color: "white" }} />
                    </a>
                </Box>
            </Grid>

        </>
    )
}

export default Footer;