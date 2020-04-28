import React from "react";
import { Notification } from "react-admin";

const MyNotification = (props: JSX.IntrinsicAttributes) => (
  <Notification {...props} autoHideDuration={5000} />
);

export default MyNotification;
