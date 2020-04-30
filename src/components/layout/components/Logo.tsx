import { makeStyles } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import React from "react";

const useLogoStyle = makeStyles({
    avatar: {
        height: "auto",
        minWidth: 80,
        borderRadius: 3,
        padding: 2,
        background: "#fff",
    },
});

const MyLogo = () => {
    const classes = useLogoStyle();
    return (
        <Avatar
            className={classes.avatar}
            src="https://source.unsplash.com/random/80x40/daily"
        />
    );
};

export default MyLogo;
