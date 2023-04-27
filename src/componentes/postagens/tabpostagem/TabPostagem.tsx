import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Typography} from '@material-ui/core';
import {Box} from '@mui/material';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';


function TabPostagem() {

    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string): void {
        setValue(newValue);
    }
    return (
        <>
            <TabContext value={value}>
                <AppBar position="static">
                    <Tabs centered onChange={handleChange} className='mini-box'>
                        <Tab label="Todas as postagens" value="1" className='tab-post'/>
                        <Tab label="Sobre o site" value="2" className='tab-post' />
                    </Tabs>
                </AppBar>
                <TabPanel value="1" >
                    <Box display="flex" flexWrap="wrap" justifyContent="center">
                        <ListaPostagem />
                    </Box>
                </TabPanel>
                <TabPanel value="2">
                    <Typography variant="h6" gutterBottom  component="h4" align="center" className="titulo">Sobre o site</Typography>
                    <Typography variant="body1" gutterBottom color="textPrimary" align="justify"></Typography>
                </TabPanel>
            </TabContext>
        </>
    );

}

export default TabPostagem;