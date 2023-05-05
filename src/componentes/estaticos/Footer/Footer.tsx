import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import './Footer.css'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/reducer';

function Footer() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    var footerComponent;

    if (token != "") {

        footerComponent =
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box style={{ backgroundColor: "whitesmoke", height: "80px" }}>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <Typography component="p" align="center" gutterBottom style={{ color: "black" }}>Siga-nos nas redes sociais </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center" className='midias'>
                            <a href="https://www.facebook.com/generationbrasil" target="_blank" rel="noopener noreferrer">
                                <FacebookIcon style={{ fontSize: 40, color: "black" }} />
                            </a>
                            <a href="https://www.instagram.com/generationbrasil/" target="_blank" rel="noopener noreferrer">
                                <InstagramIcon style={{ fontSize: 40, color: "black" }} />
                            </a>
                            <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank" rel="noopener noreferrer">
                                <LinkedInIcon style={{ fontSize: 40, color: "black" }} />
                            </a>
                        </Box>
                    </Box>

                </Grid>
            </Grid>

    }
    return (
        <>
            {footerComponent}
        </>
    )
}

export default Footer;