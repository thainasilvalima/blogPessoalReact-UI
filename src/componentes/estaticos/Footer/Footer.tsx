import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import './Footer.css'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function Footer() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    var footerComponent;

    if (token != "") {

        footerComponent =
            <Grid alignItems="center" item xs={12} container direction="row" justifyContent="center" className='ft'>
                <Box paddingTop={1} justifyContent="center" style={{ height: "90px" }}>
                    <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "black" }} >© 2023 Copyright: </Typography>

                    <Box display="flex" alignItems="center" justifyContent="center">
                        <a href="https://www.facebook.com/generationbrasil" target="_blank" rel="noopener noreferrer">
                            <FacebookIcon style={{ fontSize: 40, color: "#583d99" }} />
                        </a>
                        <a href="https://www.instagram.com/generationbrasil/" target="_blank" rel="noopener noreferrer">
                            <InstagramIcon style={{ fontSize: 40, color: "#583d99" }} />
                        </a>
                        <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank" rel="noopener noreferrer">
                            <LinkedInIcon style={{ fontSize: 40, color: "#583d99" }} />
                        </a>
                    </Box>
                </Box>
            </Grid>

    }
    return (
        <>
            {footerComponent}
        </>
    )
}

export default Footer;