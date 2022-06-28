import {
    Container,
    Typography,
    Paper,
    createStyles,
    makeStyles,
    Theme,
    Tabs,
    Tab
} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar/AppBar";
import React from "react";
import FormHeader from "../common/FormHeader";
import ApptsTable from "./ApptsTable";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            margin: theme.spacing(5, 1),
            width: "100%",
        },
        formControlLabel: {
            margin: theme.spacing(3, 1),
        },
        container: {
            margin: theme.spacing(1),
            padding: theme.spacing(10),
            background: "#fff",
        },
        item: {
            background: "#fff",
        },
        button: {
            margin: theme.spacing(3),
        },
        tab: {
            margin: theme.spacing(1, 1, 5, 1),
        },
        backdrop: {
            zIndex: theme.zIndex.drawer + 1,
            color: "#fff",
        },
    })
);

const ApptsContainer: React.FC = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Container maxWidth="lg">
            <Typography component="div" style={{ height: "100vh" }}>
                 <Paper elevation={3} className={classes.container}>
                     <FormHeader title={"Appointments"} />
                     <AppBar position="static" className={classes.tab}> 
                     <Tabs value={0} aria-label="simple tabs example">
                        <Tab label="Data" />
                    </Tabs>
                     </AppBar>
                        <ApptsTable />
                     </Paper>
                     </Typography>
            </Container>
        </React.Fragment>
    )
};

export default ApptsContainer;