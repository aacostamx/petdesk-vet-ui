import { makeStyles, Theme, createStyles, Backdrop, CircularProgress } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { fetchVetData } from "../../apis/vet.api";
import Appointment from "../../models/Appointment";
import ApptsList from "./ApptsList";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        backdrop: {
            zIndex: theme.zIndex.drawer + 1,
            color: "#fff",
        },
    })
);

const ApptsTable: React.FC = () => {
    const classes = useStyles();
    const [rows, setRows] = useState<Appointment[]>([]);
    const [open, setOverlay] = useState<boolean>(false);

    useEffect(() => {
        setOverlay(true);
        fetchVetData()
            .then((r: Appointment[]) => {
                setRows(r);
                setOverlay(false);
            })
            .catch((e) => {
                setOverlay(false);
                console.log(e);
            });
    }, []);

    const handleClose = () => {
        setOverlay(false);
    };

    return (
        <React.Fragment>
            <ApptsList 
            rows={rows} 
            onOverlay={setOverlay} />

            <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </React.Fragment>
    );
};
export default ApptsTable;