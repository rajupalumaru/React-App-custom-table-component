import {
    Box, Button, Link, styled, Tab, Table,
    TableBody, TableCell, TableContainer, TableHead, TableRow
} from '@mui/material';
import React from 'react';
import { style } from "./CustomTable.style.js"


const CustomTableCell = styled(TableCell)(({ customStyle = style }) => ({ ...style.tableCell, ...customStyle }));
const CustomTableRow = styled(TableRow)(() => (style.tableRow));

const CustomTable = ({ headerList, cellMatrix }) => {

    const getUrl = (url, dataObj, params) => {
        let paramStr = "";
        if (params) {
            paramStr = "?";
            let delim = "";
            for (let key in params) {
                paramStr = paramStr + delim + key + "=" + dataObj[params[key]];
                delim = '&';
            } 
        }
        return url + paramStr;
    }

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
                                                    onClick={(event) => act["onClick"](event, row)}
                                                >
                                                    {act["label"]}
                                                </Button>
                                            )
                                        })}     
                                        </>
                                    ) : (
                                        <>
                                            {headerList[key] && headerList[key]["type"] && headerList[key]["type"] === "link" ? (
                                                <Box>
                                                    {(headerList[key]['image'] && (
                                                        <img src={row[key]?.img} alt="1k-img" style={headerList[key]['image']?.style} />
                                                    ))}
                                                    <Link className='link' to={getUrl(headerList[key]['url'], row,
                                                        headerList[key]['urlParams'])}>{row[key]?.textc || row[key]}
                                                    </Link>

                                                </Box>
                                            ) : (headerList[key] && headerList[key]["type"] && headerList[key]["type"] === "image" ? (
                                                <img src={row[key]} alt='td-img' />
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