import { ClickAwayListener, Paper, Popper, styled } from '@mui/material';
import React, { useState } from 'react';
import { style } from './popoverContainr.style';

const Arrow = styled("span")(style.arrow);

const CustomPopper = styled(Popper)(({ theme }) => ({
    zIndex: 9999,
    '&[data-popper-placement*="bottom"]span': {
        top: 0,
        left: 0,
        marginTop: "-18.5px",
        width: '54px',
        height: '18.5px',
        "&::before": {
            brderWidth: "0 27px 18.5px 27px",
            borderColor: `transparent transparent #ffffff transparent`
        }
    },
    '&[data-popper-placement*="top"]span': {
        bottom: 0,
        left: 0,
        marginBottom: "-18.5px",
        width: '54px',
        height: '18.5px',
        "&::before": {
            brderWidth: "18.5px 27px 0 27px",
            borderColor: `#ffffff transparent transparent transparent`
        }
    },
    '&[data-popper-placement*="right"]span': {
        left: 0,
        marginLeft: "-18.5px",
        width: '18.5px',
        height: '54px',
        "&::before": {
            brderWidth: "27px 18.5px 27px 0",
            borderColor: `transparent #ffffff transparent transparent`
        }
    },
    '&[data-popper-placement*="left"]span': {
        right: 0,
        marginRight: "-18.5px",
        width: '54px',
        height: '18.5px',
        "&::before": {
            brderWidth: "27px 0 27px 18.5px",
            borderColor: `transparent transparent transparent #ffffff`
        }
    }

}))

const PopoverContainer = ({ children, anchorE1 = null, onClose, ...props }) => {
    const open = Boolean(anchorE1);
    const [arrowRef, setArrowRef] = useState(null);

    return (
        <CustomPopper
            {...props}
            placement='bottom'
            disablePortal={false}
            open={open}
            anchorE1={anchorE1}
            modifiers={[
                {
                    name: 'flip',
                    enabled: true
                },
                {
                    name: 'preventOverFlow',
                    enabled: true,
                    options: {
                        boundariesElement: 'viewport',
                        escapeWithReference: true,
                        padding: 8
                    }

                }, {
                    name: 'arrow',
                    enabled: true,
                    options: {
                        element: arrowRef,
                    }
                }, {
                    name: 'offset',
                    options: {
                        offset: [0, 18.5]
                    }
                }
            ]}
        >
            <Arrow ref={setArrowRef} />
            <ClickAwayListener onClickAway={onClose}>
                <Paper
                    sx={style.paper}
                >
                    {children}
                </Paper>

            </ClickAwayListener>
        </CustomPopper>

    )
}
export default PopoverContainer;