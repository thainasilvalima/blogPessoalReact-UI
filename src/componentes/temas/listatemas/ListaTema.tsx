import React, { useState, useEffect } from 'react';
import useLocalStorage from 'react-use-localstorage';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Tema from '../../../models/Tema';
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { busca } from '../../../services/Service';
import { Box } from '@mui/material';
import './ListaTema.css';

function ListaTema() {

    const [temas, setTemas] = useState<Tema[]>([])
    const [token, setToken] = useLocalStorage('token');
    let navigate = useNavigate();

    useEffect(() => {
        if (token == '') {
            alert("Você precisa estar logado!")
            navigate("/login")
        }
    }, [token]);

    async function getTema() {
        await busca("/temas", setTemas, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        getTema()
    }, [temas.length])



    return (
        <>
            {
                temas.map(tema => (

                    <Box m={2} className='container-listTema' >
                        <Card className='card-tema' >
                            <CardContent >
                                <Typography color="textSecondary" gutterBottom className='card-titulo-tema'> 
                                    Tema
                                </Typography>
                                <Typography variant="h6" component="h2" className='card-titulo-tema'>
                                    Minha descrição
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Box display="flex" justifyContent="center" mb={1.5} >
                                    <Link to={`/formularioTema/${tema.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button  className='botao-lista-tema1'size='small'  >
                                                Atualizar
                                            </Button>
                                        </Box>
                                    </Link>
                                    <Link to={`/deletarTema/${tema.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button  size='small' className='botao-lista-tema2'>
                                                Deletar
                                            </Button>
                                        </Box>
                                    </Link>
                                </Box>
                            </CardActions>
                        </Card>
                    </Box >
                ))
            }
        </>
    );
}


export default ListaTema;