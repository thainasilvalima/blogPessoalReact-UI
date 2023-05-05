import React, { ChangeEvent, useEffect, useState } from 'react'
import { Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText, Grid, Container } from "@material-ui/core"
import './CadastroPost.css';
import { useNavigate, useParams } from 'react-router-dom'
import Tema from '../../../models/Tema';
import Postagem from '../../../models/Postagem';
import { busca, buscaId, post, put } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/reducer';
import { toast } from 'react-toastify';
import { Box } from '@mui/material';

function CadastroPost() {
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [temas, setTemas] = useState<Tema[]>([])
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

            navigate("/login")

        }
    }, [token])

    const [tema, setTema] = useState<Tema>(
        {
            id: 0,
            descricao: ''
        })
    const [postagem, setPostagem] = useState<Postagem>({
        id: 0,
        titulo: '',
        texto: '',
        tema: null,



    })

    useEffect(() => {
        setPostagem({
            ...postagem,
            tema: tema
        })
    }, [tema])

    useEffect(() => {
        getTemas()
        if (id !== undefined) {
            findByIdPostagem(id)
        }
    }, [id])

    async function getTemas() {
        await busca("/temas", setTemas, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function findByIdPostagem(id: string) {
        await buscaId(`postagens/${id}`, setPostagem, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedPostagem(e: ChangeEvent<HTMLInputElement>) {

        setPostagem({
            ...postagem,
            [e.target.name]: e.target.value,
            tema: tema
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {

            try {
                await put(`/postagens`, postagem, setPostagem, {
                    headers: {
                        'Authorization': token
                    }
                })
                toast.success('Postagem atualizada com sucesso', {
                    position: "top-center",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                });
            } catch (error) {
                toast.error('Erro ao atualizar, verifique os campos', {
                    position: "top-center",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                });
            }

        } else {

            try {
                await post(`/postagens`, postagem, setPostagem, {
                    headers: {
                        'Authorization': token
                    }
                })
                toast.success('Postagem cadastrada com sucesso', {
                    position: "top-center",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                });
            } catch (error) {
                toast.error('Erro ao cadastrar, verifique os campos', {
                    position: "top-center",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                });
            }

        }
        back()

    }

    function back() {
        navigate('/postagens')
    }


    return (

        <Grid container className='bg-cadastro-post'>
            <Grid item xs={12} sm={12}>
                <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                    <Box className='cardForm-post'>
                        <form onSubmit={onSubmit}>
                            <Typography variant="h4" className='tituloPost' component="h1" align="center" >Formulario de cadastro de postagem</Typography>
                            <TextField value={postagem.titulo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="titulo" label="Título" name="titulo" margin="normal" fullWidth />
                            <TextField value={postagem.texto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="texto" label="Texto" name="texto" margin="normal" fullWidth />

                            <FormControl >
                                <InputLabel id="demo-simple-select-helper-label">Tema </InputLabel>
                                <Select
                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select-helper"
                                    onChange={(e) => buscaId(`/temas/${e.target.value}`, setTema, {
                                        headers: {
                                            'Authorization': token
                                        }
                                    })}>
                                    {
                                        temas.map(tema => (
                                            <MenuItem value={tema.id}>{tema.descricao}</MenuItem>
                                        ))
                                    }
                                </Select>
                                <FormHelperText className='formtema'>Escolha um tema para a postagem</FormHelperText>
                                <Button type="submit" variant="contained" className='btncad'>
                                    Cadastrar
                                </Button>
                            </FormControl>
                        </form>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}
export default CadastroPost;