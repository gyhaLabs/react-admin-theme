import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import React from "react";
import { Title } from "react-admin";
import LocaleSwitcher from "../configuration/LocalSwitcher";
export default () => (
    <Card>
        <Title title="Admin Configuratoins" />
        <CardContent>
            <LocaleSwitcher />
        </CardContent>
    </Card>
);
