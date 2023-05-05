import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { UserState } from '../../store/tokens/reducer';
import User from '../../models/User';
import { buscaId } from '../../services/Service';
import './Perfil.css'
import { toast } from 'react-toastify';

function Perfil() {

    let navigate = useNavigate()

    // Pega o ID guardado no Store
    const id = useSelector<UserState, UserState["id"]>(
        (state) => state.id
    );

    // Pega o Token guardado no Store
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    )

    const [user, setUser] = useState<User>({
        id: +id,    // Faz uma conversão de String para Number
        nome: '',
        usuario: '',
        senha: '',
        foto: ''
    })

    useEffect(() => {
        if (token === "") {
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

    // Métedo para pegar os dados de um Usuário especifico pelo ID
    async function findById(id: string) {
        await buscaId(`/usuarios/${id}`, setUser, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    return (
        <Box className='card-principal'>
            <Box className='card-container-imagem'>
                <img className='card-imagem'
                    src={ user.foto }
                    alt={ user.nome } />
            </Box>

            <Box className='card-container-info'>
                <Box>
                    <h1>{ user.nome }</h1>
                    <hr />
                </Box>

                <p className='card-container-texto'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam accusantium totam incidunt architecto maiores, perferendis eius. Tempora ullam magni dolore voluptatibus, quidem sunt tempore distinctio ut aliquam modi aliquid officiis.
                    Assumenda voluptatibus, animi pariatur voluptatum magnam ullam aspernatur optio suscipit incidunt dolor modi quos aperiam. Quam possimus rerum iste nobis quas porro unde sequi, sed nisi labore est voluptas corrupti.
                    Deleniti officiis sint perspiciatis nisi iste, voluptate sunt asperiores dolor sapiente non corporis omnis voluptatem soluta. Nulla odio alias aperiam, magnam eaque assumenda tempora! Inventore odit iure unde placeat iste.
                </p>

                <p className='card-container-texto'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias consectetur tempore enim hic ad, optio ratione repellendus et. Nemo facilis laborum eum facere ipsam ab ad iusto eligendi deleniti qui?
                </p>
            </Box>
        </Box>
    )
}

export default Perfil;