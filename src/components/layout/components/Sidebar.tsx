import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Sidebar } from "react-admin";

const useSidebarStyles = makeStyles({
  drawerPaper: {
    backgroundColor: "#eee",
    padding: 0,
    margin: 0,
  },
});

const MySidebar = (props: JSX.IntrinsicAttributes) => {
  const classes = useSidebarStyles();
  return <Sidebar classes={classes} {...props} />;
};

export default MySidebar;
