import React from "react";
import { Layout } from "react-admin";
import AppBar from "./components/AppBar";
import Menu from "./components/Menu";
import Notification from "./components/Notification";
import Sidebar from "./components/Sidebar";

const AppLayout = (props: JSX.IntrinsicAttributes) => (
  <Layout
    {...props}
    appBar={AppBar}
    sidebar={Sidebar}
    menu={Menu}
    notification={Notification}
  />
);

export default AppLayout;
