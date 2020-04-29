import { makeStyles } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import React from "react";

const useLogoStyle = makeStyles({
  avatar: {
    height: "auto",
    minWidth: 80,
    borderRadius: 3,
    padding: 4,
    background: "#fff",
  },
});

const MyLogo = () => {
  const classes = useLogoStyle();
  return (
    <Avatar
      className={classes.avatar}
      src="https://www.gam.com.br/index/wp-content/uploads/2017/10/default-logo.png"
    />
  );
};

export default MyLogo;
