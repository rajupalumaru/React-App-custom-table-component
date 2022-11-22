import { Box, Button, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import PopoverContainer from '../PopoverContainer';
import StyledTextField from '../styledtextfield';
import './EditModel.css';


const EditModel = (props) => {
    const { onClose, openNodeAction, editData } = props;
    const [name, setName] = useState('');
    const [serialNumber, setSerialNumber] = useState('');
    const [status, setStatus] = useState('');
    const [state, setState] = useState('');

    useEffect(() => {
        console.log("editData", editData);
        if (editData) {
            setName(editData?.name);
            setSerialNumber(editData?.category);
            setStatus(editData?.status);
            setState(editData?.location);
        }
    }, [editData])

    const handleFiledChange = (e) => {
        const name = e.target.name;
        if (name === "name") {
            setName(e.target.value);
        }
        if (name === "serialNumber") {
            setSerialNumber(e.target.value);
        }
        if (name === "status") {
            setStatus(e.target.value);
        }
        if (name === "state") {
            setState(e.target.value);
        }

    }

    const handleClose = () => {
        onClose();
    }

    const submitHandler = (e) => {
        e.preventDefault();

        onClose();
    }


    return (
        <div >
            <PopoverContainer className='editmodel' anchorE1={openNodeAction} onClose={onClose}>
                <Typography style={{ fontWeight: 600, marginBottom: "10px", textAlign:'center' }}>
                    Edit Controller
                </Typography>

                <Grid container item xs={12} justifyContent={'space-between'}>
                    <Box width={'48%'}>
                        <span>
                            <label htmlFor='firstName' className='formLabel'>name</label>
                        </span>
                        <StyledTextField
                            hiddenLabel
                            id='name'
                            name='name'
                            variant='outlined'
                            fullWidth
                            margin='none'
                            value={name}
                            onChange={handleFiledChange}
                        />
                    </Box>
                    <Box width={'48%'}>
                        <span>
                            <label htmlFor='serialNumber' className='formLabel'>serialNumber</label>
                        </span>
                        <StyledTextField
                            hiddenLabel
                            id='serialNumber'
                            name='serialNumber'
                            variant='outlined'
                            fullWidth
                            margin='none'
                            value={serialNumber}
                            onChange={handleFiledChange}
                        />
                    </Box>

                </Grid>
                <Grid container item xs={12} justifyContent={'space-between'}>
                    <Box width={'48%'}>
                        <span>
                            <label htmlFor='firstName' className='formLabel'>Status</label>
                        </span>
                        <StyledTextField
                            hiddenLabel
                            id='status'
                            name='status'
                            variant='outlined'
                            fullWidth
                            margin='none'
                            value={status}
                            onChange={handleFiledChange}
                        />
                    </Box>
                    <Box width={'48%'}>
                        <span>
                            <label htmlFor='serialNumber' className='formLabel'>state</label>
                        </span>
                        <StyledTextField
                            hiddenLabel
                            id='state'
                            name='state'
                            variant='outlined'
                            fullWidth
                            margin='none'
                            value={state}
                            onChange={handleFiledChange}
                        />
                    </Box>

                </Grid>
                <Box style={{ display: 'flex', gap: '1em', marginTop: '28px', justifyContent: 'flex-end' }}>
                    <Button style={{ letterSpacing: '1px' }} variant='outlined' onClick={handleClose}>
                        cancel
                    </Button>
                    <Button style={{ letterSpacing: '1px', background: '#0f8d48', color: 'white' }} variant='outlined' onClick={submitHandler}>
                        Save
                    </Button>
                </Box>
            </PopoverContainer>
        </div>
    )
}
export default EditModel;