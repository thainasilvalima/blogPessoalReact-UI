import React, { useState, useEffect, ChangeEvent } from 'react'
import { Container, Typography, TextField, Button } from "@material-ui/core"
import { useNavigate, useParams } from 'react-router-dom'
import './CadastroTema.css';
import useLocalStorage from 'react-use-localstorage';
import Tema from '../../../models/Tema';
import { buscaId, post, put } from '../../../services/Service';


function CadastroTema() {
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [token, setToken] = useLocalStorage('token');
    const [tema, setTema] = useState<Tema>({
        id: 0,
        descricao: ''
    })

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            navigate("/login")

        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/tema/${id}`, setTema, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedTema(e: ChangeEvent<HTMLInputElement>) {

        setTema({
            ...tema,
            [e.target.name]: e.target.value,
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log("tema " + JSON.stringify(tema))

        if (id !== undefined) {

            try {
                await put(`/temas`, tema, setTema, {
                    headers: {
                        'Authorization': token
                    }
                })
                alert('Tema atualizado com sucesso');

            } catch (error) {
                console.log(`Error: ${error}`)
                alert("Erro, por favor verifique a quantidade minima de caracteres")
            }


        } else {

            try {
                await post(`/temas`, tema, setTema, {
                    headers: {
                        'Authorization': token
                    }
                })

                alert('Tema cadastrado com sucesso');
            } catch (error) {
                console.log(`Error: ${error}`)
                alert("Erro, por favor verifique a quantidade minima de caracteres")
            }


        }
        back()

    }

    function back() {
        navigate('/temas')
    }

    return (
        <Container maxWidth="sm" className="topo" >
            <form onSubmit={onSubmit} className='form-tema'>
                <Typography variant="h4" className='tema-titulo' >Formulario de cadastro do tema</Typography>
                <TextField value={tema.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} className='form-input' id="descricao" label="descricao"  name="descricao" margin="normal" fullWidth />
                <Button type="submit"  className='botao-cad-tema' >
                    Finalizar
                </Button>
            </form>
        </Container>
    )
}

export default CadastroTema;