import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import React from "react";
import { NotFound, Title } from "react-admin";

export default () => (
  <Card>
    <Title title="Not Found" />
    <CardContent>
      <NotFound title=" 404" />
    </CardContent>
  </Card>
);
