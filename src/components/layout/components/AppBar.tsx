import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import SettingsIcon from "@material-ui/icons/Settings";
import React, { forwardRef } from "react";
import { AppBar, MenuItemLink, UserMenu } from "react-admin";

const useStyles = makeStyles({
  avatar: {
    height: 30,
    width: 30,
  },
});

const MyCustomIcon = () => {
  const classes = useStyles();
  return (
    <Avatar
      className={classes.avatar}
      src="https://marmelab.com/images/avatars/adrien.jpg"
    />
  );
};

const ConfigurationMenu = forwardRef((ref) => (
  <MenuItemLink
    ref={ref}
    to="/configuration"
    primaryText="Configuration"
    leftIcon={<SettingsIcon />}
  />
));

const MyUserMenu = (props: JSX.IntrinsicAttributes) => (
  <UserMenu {...props} icon={<MyCustomIcon />}>
    <ConfigurationMenu />
  </UserMenu>
);

const MyAppBar = (props: JSX.IntrinsicAttributes) => (
  <AppBar {...props} userMenu={<MyUserMenu />} />
);

export default MyAppBar;
