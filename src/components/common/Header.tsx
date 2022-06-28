import React from "react";
import logo from "../../white-logo.png";
import UserCard from "./UserCard";
import Grid from "@material-ui/core/Grid";

interface HeaderProps { }
const Header: React.FC<HeaderProps> = () => {
    const user = ({ first: "Joe", last: "Doe" });

    return (
        <Grid container>
            <Grid item xs={4}>
                <img src={logo} alt="" />
            </Grid>
            <Grid item xs={5}>
                <h2 className="system-message">
                    {process.env.REACT_APP_NON_PROD === "true" ? "Test by Antonio Acosta" : ""}
                </h2>
            </Grid>
            <Grid item xs={3}>
                <UserCard userInfo={user} />
            </Grid>
        </Grid>
    );
};
export default Header;