import { Box } from '@mui/material'
import { Button, Grid, TextField, Typography, } from '@material-ui/core'

import './Home.css'

function Home() {
    return (
        <Grid container className="bg-home">
            <Grid item xs={12} sm={12}>

                <Box display="flex" justifyContent="center" alignItems="center" height="60vh">

                    <Box className="card">
                        <Typography className='card-title' variant="h5" align="center">
                            Login
                        </Typography>

                        <form>
                            <Box marginY={4}>
                                <TextField className='form-input' id="standard-basic" type="email" label="Email" required />
                            </Box>

                            <Box marginY={4}>
                                <TextField className='form-input' id="standard-basic" type="password" label="Senha" required />
                            </Box>

                            <Button className="form-btn" variant="contained">
                                Acessar
                            </Button>
                        </form>

                    </Box>

                </Box>

            </Grid>
        </Grid >



    )
}

export default Home