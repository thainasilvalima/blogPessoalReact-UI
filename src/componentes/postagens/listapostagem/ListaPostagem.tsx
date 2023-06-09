import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Postagem from '../../../models/Postagem';
import { busca } from '../../../services/Service'
import { Card, CardActions, CardContent, Button, Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material';
import './ListaPostagem.css';
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/reducer';
import { toast } from 'react-toastify';


function ListaPostagem() {

    const [posts, setPosts] = useState<Postagem[]>([])
    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == "") {
            toast.error('Você precisa estar logado', {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
            
            navigate("/login");

        }
    }, [token]);

    async function getPost() {
        await busca("/postagens", setPosts, {
            headers: {
                'Authorization': token
            },
        });
    }

    useEffect(() => {

        getPost()

    }, [posts.length]);

    return (
        <>
        <Grid container direction='row'>
            {
                posts.map(post => (
                    <Box m={2} className='container-listPost' >
                        <Card className='card-post' >
                            <CardContent >
                                <Typography color="textSecondary" gutterBottom className='card-titulo-post'>
                                    Postagens
                                </Typography>
                                <Typography variant="h5" component="h2" className='card-titulo-post'>
                                {post.titulo}
                                </Typography>
                                <Typography variant="body2" component="p" className='card-titulo-post'>
                                {post.texto}
                                </Typography>
                                <Typography variant="body2" component="p" className='card-titulo-post'>
                                {post.tema?.descricao}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Box display="flex" justifyContent="center" mb={1.5}>

                                    <Link to={`/formularioPostagem/${post.id}`} className="text-decorator-none" >
                                        <Box mx={1}>
                                            <Button variant="contained" size='small' className='botao-lista-tema1'>
                                                atualizar
                                            </Button>
                                        </Box>
                                    </Link>

                                    <Link to={`/deletarPostagem/${post.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant="contained" size='small' className='botao-lista-tema2'>
                                                deletar
                                            </Button>
                                        </Box>
                                    </Link>
                                </Box>
                            </CardActions>
                        </Card>
                    </Box>
                ))
            }
            </Grid>
        </>
        
        );
}

export default ListaPostagem;