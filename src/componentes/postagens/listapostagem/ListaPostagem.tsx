import React from 'react'
//import { Link } from 'react-router-dom'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import './ListaPostagem.css';


function ListaPostagem() {


    return (
        <>
            <Box m={2} >
                <Card variant="outlined">
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Postagens
                        </Typography>
                        <Typography variant="h5" component="h2">
                            Título
                        </Typography>
                        <Typography variant="body2" component="p">
                            Texto da Postagem
                        </Typography>
                        <Typography variant="body2" component="p">
                            Tema
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Box display="flex" justifyContent="center" mb={1.5}>


                            <Box mx={1}>
                                <Button variant="contained" className="marginLeft" size='small' color="primary" >
                                    Atualizar
                                </Button>
                            </Box>


                            <Box mx={1}>
                                <Button variant="contained" size='small' color="secondary">
                                    Deletar
                                </Button>
                            </Box>

                        </Box>
                    </CardActions>
                </Card>
            </Box>
        </>);
}

export default ListaPostagem;