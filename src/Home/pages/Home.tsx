import React, { useEffect } from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import TabPostagem from '../../componentes/postagens/tabpostagem/TabPostagem';
import './Home.css';
import ModalPostagem from '../../componentes/postagens/modalPostagem/ModalPostagem';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';



function Home() {

    let navigate = useNavigate();
    const [token, setToken] = useLocalStorage('token');

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            navigate("/login")

        }
    }, [token])
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h2" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Seja bem vinde</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo2'>expresse aqui os seus pensamentos e opiniões 💟  </Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}  >
                            <ModalPostagem />
                        </Box>
                        <Button className='botao'>Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="src/assets/img/background3.png" alt="" width="700px" height="500px" />
                </Grid>
                <Grid xs={12} className='postagens'>
                    <TabPostagem />
                </Grid>
            </Grid>

        </>



    );
}

export default Home;