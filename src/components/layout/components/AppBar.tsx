import { Typography } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import SettingsIcon from "@material-ui/icons/Settings";
import React, { forwardRef } from "react";
import { AppBar, MenuItemLink, UserMenu } from "react-admin";
import Logo from "./Logo";

const useIconStyles = makeStyles({
    avatar: {
        height: 30,
        width: 30,
    },
});

const useStyles = makeStyles({
    title: {
        flex: 1,
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden",
    },
    spacer: {
        flex: 1,
    },
});

const MyCustomIcon = () => {
    const classes = useIconStyles();
    return (
        <Avatar
            className={classes.avatar}
            src="https://marmelab.com/images/avatars/adrien.jpg"
        />
    );
};

const ConfigurationMenu = forwardRef((props, ref) => (
    <MenuItemLink
        ref={ref}
        to="/configurations"
        primaryText="Configuration"
        leftIcon={<SettingsIcon />}
        {...props}
    />
));

const MyUserMenu = (props: JSX.IntrinsicAttributes) => (
    <UserMenu {...props} icon={<MyCustomIcon />}>
        <ConfigurationMenu />
    </UserMenu>
);

const MyAppBar = (props: JSX.IntrinsicAttributes) => {
    const classes = useStyles();
    return (
        <AppBar {...props} userMenu={<MyUserMenu />}>
            <Typography
                variant="h6"
                color="inherit"
                className={classes.title}
                id="react-admin-title"
            />
            <Logo />
            <span className={classes.spacer} />
        </AppBar>
    );
};

export default MyAppBar;
