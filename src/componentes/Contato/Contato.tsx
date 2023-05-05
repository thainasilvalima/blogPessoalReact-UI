import { AppBar, Grid, TextField, Toolbar, Typography } from '@material-ui/core';
import './Contato.css'
import { ChangeEvent } from 'react';
import { Box } from '@mui/material';

async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
}

function Contato() {

    return (
        <Grid container className="contato">
            <Grid item xs={12} sm={12} className='container-cad' >
                <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                    <Box className='cardForm' >
                        <Typography variant='h3' align='center' className='text'> Entre em contato com a gente! </Typography>
                        <form onSubmit={onSubmit} className='all'>

                            <Box alignItems={'center'}>
                                <TextField id="nome" label='Nome' name='nome' margin='normal' fullWidth />
                                <TextField type="email" id="email" label='Email' name='email' margin='normal' fullWidth />
                                <TextField type="tel" id="telefone" label='Telefone' name='telefone' margin='normal' fullWidth />
                                <TextField type="message" id="mensagem" label='Mensagem' name='mensagem' margin='normal' fullWidth />
                            </Box>
                            <button className='but' type="submit">Enviar</button>
                            <Typography className='info'>Para mais informações, dúvidas ou sugestões, visite nossos canais disponíveis.</Typography>
                        </form>
                    </Box>
                </Box>
            </Grid>
        </Grid>


    );
}

export default Contato;