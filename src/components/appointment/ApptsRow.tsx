import { TableRow, TableCell, IconButton, makeStyles, Snackbar } from "@material-ui/core";
import React, { useState } from "react";
import DoneIcon from '@material-ui/icons/Done';
import Appointment from "../../models/Appointment";
import AlertModel from "../../models/common/AlertModel";
import { successAlert } from "../../utilities/alert.utility";
import { Alert } from "@material-ui/lab";
import { KeyboardDateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            borderBottom: "unset",
        },
    },
    details: {
        margin: 10,
        background: "#fff",
    },
}));

interface SearchRowProps {
    row: Appointment;
    onOverlay: (value: boolean) => void;
}

const ApptsRow: React.FC<SearchRowProps> = ({ row, onOverlay }) => {
    const classes = useStyles();
    const [open, setOpen] = useState<boolean>(false);
    const [message, setMessage] = useState<AlertModel>(successAlert());
    const [appointment, setAppointment] = useState<Appointment>(row)

    const ShowAlert = (alert: AlertModel) => {
        setMessage(alert);
        setOpen(true);
    }

    const Accept = () => {
        ShowAlert({ message: "Confirm success!", severity: "success" })
    };

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === "clickaway")
            return;
        setOpen(false);
    }

    const updateFieldChanged = (field: string, value: Date) => {
        let newRow = { ...appointment };
        newRow.requestedDateTimeOffset = value;
        setAppointment(newRow);
    };

    return (
        <React.Fragment>
            <TableRow key={row.appointmentId} className={classes.root}>
                <TableCell>{row.appointmentId}</TableCell>
                <TableCell>{row.appointmentType}</TableCell>
                <TableCell>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDateTimePicker
                            key={row.appointmentId.toString()}
                            variant="inline"
                            value={row.requestedDateTimeOffset}
                            onChange={(date) => updateFieldChanged("requestedDateTimeOffset", date as Date)}
                            autoOk={true} />
                    </MuiPickersUtilsProvider>
                </TableCell>
                {/* <TableCell>{row.requestedDateTimeOffset}</TableCell> */}
                <TableCell>{row.user.firstName + ' ' + row.user.lastName}</TableCell>
                <TableCell>{row.animal.firstName}</TableCell>
                <TableCell>
                    <IconButton onClick={() => Accept()}>
                        <DoneIcon />
                    </IconButton>
                </TableCell>
            </TableRow>

            <div>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose}>
                        {message.message}
                    </Alert>
                </Snackbar>
            </div>

        </React.Fragment>
    );
};
export default ApptsRow;
