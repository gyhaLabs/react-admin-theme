import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import React from "react";
import { useLocale, useSetLocale, useTranslate } from "react-admin";

const useStyles = makeStyles({
    label: { width: "10em", display: "inline-block" },
    button: { margin: "1em" },
});

const LocaleSwitcher = () => {
    const translate = useTranslate();
    const locale = useLocale();
    const setLocale = useSetLocale();
    const classes = useStyles();

    return (
        <div>
            <div className={classes.label}>{translate("pos.language")}</div>
            <Button
                variant="contained"
                className={classes.button}
                color={locale === "en" ? "primary" : "default"}
                onClick={() => setLocale("en")}
            >
                en
            </Button>
            <Button
                variant="contained"
                className={classes.button}
                color={locale === "fr" ? "primary" : "default"}
                onClick={() => setLocale("fr")}
            >
                fr
            </Button>
        </div>
    );
};

export default LocaleSwitcher;
