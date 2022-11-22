
import { outlinedInputClasses, styled, TextField } from '@mui/material';
import React from 'react';

const StyledTextField=styled(TextField)(({theme})=>({
    [`&.${outlinedInputClasses.notchedOutline}`]:{
        border:'none',
    },
    [`&.${outlinedInputClasses.root}`]:{
        border:'1px solid #D9D9D9',
    },
    [`&.${outlinedInputClasses.input}`]:{
        background:'#FFFFFF',
        borderRadius:'4px',
        color:'rgba(0,0,0,0.8)',
        padding:'8px,10px',
        fontWeight:400,
        fontSize:'14px',
        lineHeight:'17px'
    }

}));
export default StyledTextField;