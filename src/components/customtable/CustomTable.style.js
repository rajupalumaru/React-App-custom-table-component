import { tableCellClasses } from "@mui/material";


export const style = {
    tableCell: {
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: '#333333',
            fontWeight: 600,
            fontSize: '10px',
            lineHeight: '19px',
            letterSpacing: '0.045px',
            textTransform: 'uppercase',
            color: '#ffffff',
            padding: '10px 20px'
        },
        [`&.${tableCellClasses.body}`]:{
            fontWeight:400,
            fontSize: '14px',
            lineHeight: '19px',
            color:'rgba(0, 0, 0, 0.8)',
            padding: '15px 20px'
        }
    },
    tableRow: {
        borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
        '&:nth-of-type(odd)' : {
            backgroundColor: '#ffffff',
        },
        '&:nth-of-type(even)': {
            backgroundColor: 'rgba(15, 141, 72, 0.05)',
        }
    }
}