import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyle = makeStyles((theme: Theme) =>
    createStyles({
        formHead: {
            fontStyle: "italic",
            textAlign: "right"
        },
    }))

interface FormHeaderProps {
    title: string;
}

const FormHeader: React.FC<FormHeaderProps> = ({ title }) => {
    const classes = useStyle();

    return (
        <div>
            <Typography variant="h6" gutterBottom className={classes.formHead}>
                {title}
            </Typography>
        </div>
    );
};

export default FormHeader;