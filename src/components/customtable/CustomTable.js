import { Box, Button, Link, styled, Tab, Table,
     TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';
import {style} from "./CustomTable.style.js"


const CustomTableCell = styled(TableCell)(({customStyle=style})=>({...style.tableCell, ...customStyle}));
const CustomTableRow = styled(TableRow)(()=>(style.tableRow));

const CustomTable = ({ headerList, cellMatrix }) => {

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        {Object.keys(headerList)?.map((key, headerIndex) => (
                            <CustomTableCell key={`table-header-${headerIndex}`}>
                                {headerList[key]["label"]}
                            </CustomTableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {cellMatrix?.map((row, index2) => (
                        <CustomTableRow key={"ctrow" + index2} >
                            {Object.keys(headerList)?.map((key) => (
                                <CustomTableCell key={"b-" + key} style={headerList[key]["style"]}>
                                    {key === "userActions" ? (
                                        <>{headerList[key]["actions"].map((act, ind) => {
                                            return (
                                                <Button
                                                    key={`table-action-${ind}`}
                                                    type="button"
                                                    onclick={(event) => act["onClick"](event, row)}
                                                >
                                                    {act[row]}
                                                </Button>
                                            )
                                        })}</>
                                    ) : (
                                        <>
                                            {headerList[key] && headerList[key]["type"] && headerList[key]["type"] === "link" ? (
                                                <Box>
                                                    {(headerList[key]['image'] && (
                                                        <img src={row[key]?.img} alt="1k-img" />
                                                    ))}

                                                </Box>
                                            ) : (headerList[key] && headerList[key]["type"] && headerList[key]["type"] === "image" ? (
                                                <img src={row[key]} />
                                            ) : (headerList[key] && headerList[key]["type"] && headerList[key]["type"] === "list" ? (
                                                <>
                                                    {row[key]?.join(headerList[key]['separator'])}
                                                </>
                                            ) : (
                                                <>
                                                    {row[key]}
                                                </>
                                            )))

                                            }
                                        </>
                                     )}
                                </CustomTableCell>
                            ))}
                        </CustomTableRow>
                    ))}
                </TableBody>
            </Table>

        </TableContainer>
    )
}
export default CustomTable;