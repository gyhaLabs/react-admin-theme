import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import React from "react";
import { Title } from "react-admin";

export interface MiscellaneousProps {}

const Miscellaneous: React.FC<MiscellaneousProps> = () => {
  return (
    <Card>
      <Title title="Miscellaneous" />
      <CardContent>Lorem ipsum sic dolor amet...</CardContent>
    </Card>
  );
};

export default Miscellaneous;
