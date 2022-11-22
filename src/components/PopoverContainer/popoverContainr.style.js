export const style={
    arrow:{
        position:'absolute',

        fontSize:'7px',
        width  :"8px",
        height:"0px",

        // '&::before': {
        //     content: '"',
        //     margin: 'auto',
        //     display: 'block',
        //     width: 0,
        //     height: 0,
        //     borderStyle: 'solid',
        // }
    },
    popper: {
        '&[data-popper-placement+="bottom"] span': {
            top: 0,
            left: 0,
            marginTop: "-18.5px",
            width: '54px',
            height: '-18.5px',
            "&::before": {
                borderWidth: "0 27 18.5px 27px",
                borderColor: `transparent transparent #ffffff transparent`
            }
        },
        '&[data-popper-placement+="top"] span': {
            bottom:0,
            left: 0,
            marginBottom: "-18.5px",
            width: '54px',
            height: '18.5px',
            "&::before": {
                borderWidth: "18.5px 27px 0 27px",
                borderColor: `#ffffff transparent transparent transparent`
            }
        },
        '&[data-popper-placement+="right"] span': {
            left:0,
            marginLeft: "-18.5px",
            width: '18.5px',
            height: '54px',
            "&::before": {
                borderWidth: "27px 18.5px 27px 0",
                borderColor: `transparent #ffffff transparent transparent`
            }
        },
        '&[data-popper-placement+="left"] span': {
            right:0,
            marginRight: "-18.5px",
            width: '54px',
            height: '18.5px',
            "&::before": {
                borderWidth: "27px 0 27px 18.5px",
                borderColor: `transparent transparent transparent #ffffff`
            }
        }
    },
    paper: {
        background: '#ffffff',
        boxShadow: '0px 8px 60px rgba(0, 0, 0, 0.2), 0px 4px 24px rgba(0, 0, 0, 0.08)',
        boderRadius: '10px',
        py: 2.5,
        px: '15px'
    }
}