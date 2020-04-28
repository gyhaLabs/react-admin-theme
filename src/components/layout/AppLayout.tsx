import React from "react";
import { Layout } from "react-admin";
import AppBar from "./components/AppBar";
import Notification from "./components/Notification";
import Sidebar from "./components/Sidebar";

const AppLayout = (props: JSX.IntrinsicAttributes) => (
  <Layout
    {...props}
    appBar={AppBar}
    sidebar={Sidebar}
    notification={Notification}
  />
);

export default AppLayout;
