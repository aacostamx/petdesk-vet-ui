import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Appointment from "../../models/Appointment";
import ApptsRow from "./ApptsRow";
import { TableCell, TableHead, TableRow } from "@material-ui/core";
import { getSearchHeader } from "../../utilities/table.utility";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: "100%",
        },
        paper: {
            width: "100%",
            marginBottom: theme.spacing(2),
        },
        table: {
            minWidth: 750,
        },
        visuallyHidden: {
            border: 0,
            clip: "rect(0 0 0 0)",
            height: 1,
            margin: -1,
            overflow: "hidden",
            padding: 0,
            position: "absolute",
            top: 20,
            width: 1,
        },
    })
);

interface ApptsListProps {
    rows: Appointment[];
    onOverlay: (value: boolean) => void;
}

const ApptsList: React.FC<ApptsListProps> = ({ rows, onOverlay }) => {
    const classes = useStyles();
    const [dense] = useState(true);

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <TableContainer>
                    <Table
                        className={classes.table}
                        aria-labelledby="tableTitle"
                        size={dense ? "small" : "medium"}
                        aria-label="enhanced table">
                        <TableHead>
                            <TableRow>
                                {
                                    getSearchHeader.map((headCell) => (
                                        <TableCell
                                            key={headCell.id}
                                            align={headCell.numeric ? "right" : "left"}
                                            padding={headCell.disablePadding ? "none" : "default"}>
                                            <strong>{headCell.label}</strong>
                                        </TableCell>
                                    ))
                                }
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                rows.map((row, index) => {
                                    return (
                                        <ApptsRow key={index} row={row} onOverlay={onOverlay} />
                                    )
                                })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </div>
    );
};

export default ApptsList;