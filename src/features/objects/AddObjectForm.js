import React,  { useState }  from 'react';
import { useDispatch } from 'react-redux';
import FileBase64 from 'react-file-base64';
import { TextField, Typography, Box, Button } from '@mui/material';

import { objectAdded } from './objectsSlice';
import { selectAllUsers } from '../users/usersSlice';

//I am stupid and don't know how to write legitimate code.
const AddObjectForm = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('')
    const [url, setUrl] = useState('')
    const [explorer, setExplorer] = useState('')

    const onNameChanged = (e) => {setName(e.target.value)}
    const onUrlChanged = (e) => {setUrl(e.target.value)}
    const onExplorerChanged =(e) => {setExplorer(e.target.value)}

    const onSaveClicked = () => {
        if( name && url && explorer ) {
            dispatch(objectAdded(name, url, explorer))
            setName('')
            setUrl('')
            setExplorer('')
        }
    }

    const canSave = Boolean(name) && Boolean(url) && Boolean(explorer)

    return (
        <Box 
            component='form' 
            sx={{
                display:'flex', 
                flexDirection:'column', 
                '& > :not(style)': {m:1, width:'25ch'}
            }} 
        >
            <TextField required id='name' variant='outlined' label='Name' onChange={onNameChanged} />
            <TextField required id='file' variant='outlined' label='file' onChange={onUrlChanged} />
            <TextField required id='explorer' variant='outlined' label='explorer' onChange={onExplorerChanged} />
            <Button variant='outlined' onClick={onSaveClicked} disabled={!canSave}>SAVE</Button>
        </Box>
    )
}

export default AddObjectForm