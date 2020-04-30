import { createMuiTheme } from "@material-ui/core/styles";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import polyglotI18nProvider from "ra-i18n-polyglot";
import romanianMessages from "ra-language-romanian";
import * as React from "react";
import { Admin, Logout, Resource } from "react-admin";
import {
    FirebaseAuthProvider,
    FirebaseDataProvider,
    RAFirebaseOptions,
} from "react-admin-firebase";
import { Route } from "react-router-dom";
import NotFound from "./components/404/NotFound";
import CustomLoginPage from "./components/auth/LoginPage";
import AppLayout from "./components/layout/AppLayout";
import Configuration from "./components/pages/Configuration";
import Dashboard from "./components/pages/Dashboard";
import Miscellaneous from "./components/pages/Miscellaneous";
import {
    PostCreate,
    PostEdit,
    PostList,
    PostShow,
} from "./components/pages/PostPages";
import englishMessages from "./i18n/en";

const theme = createMuiTheme({
    palette: {
        type: "light", // Switching the dark mode on is a single property value change.
    },
});

const config = require("./auth/firebaseConfig.ts").firebaseConfig;

const options: RAFirebaseOptions = {
    logging: true,
    rootRef: "",
};
const dataProvider = FirebaseDataProvider(config, options);
const authProvider = FirebaseAuthProvider(config, options);

const MyLogoutButton = (props: JSX.IntrinsicAttributes) => (
    <Logout {...props} icon={<ExitToAppIcon />} />
);

const i18nProvider = polyglotI18nProvider((locale) => {
    if (locale === "fr") {
        return import("./i18n/fr").then((messages) => messages.default);
    } else {
        if (locale === "ro") {
            return romanianMessages;
        }
    }

    // Always fallback on english
    return englishMessages;
}, "en");

class App extends React.Component {
    render() {
        return (
            <Admin
                layout={AppLayout}
                title="Demo App"
                theme={theme}
                logoutButton={MyLogoutButton}
                catchAll={NotFound}
                dashboard={Dashboard}
                dataProvider={dataProvider}
                authProvider={authProvider}
                loginPage={CustomLoginPage}
                i18nProvider={i18nProvider}
                customRoutes={[
                    <Route path="/miscellaneous" component={Miscellaneous} />,
                    <Route path="/configurations" component={Configuration} />,
                ]}
            >
                <Resource
                    name="posts"
                    options={{ label: "Posts" }}
                    list={PostList}
                    show={PostShow}
                    create={PostCreate}
                    edit={PostEdit}
                />
            </Admin>
        );
    }
}

export default App;
