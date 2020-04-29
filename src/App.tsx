import { createMuiTheme } from "@material-ui/core/styles";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
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
import Dashboard from "./components/pages/Dashboard";
import Miscellaneous from "./components/pages/Miscellaneous";
import {
  PostCreate,
  PostEdit,
  PostList,
  PostShow,
} from "./components/pages/PostPages";

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
        customRoutes={[
          <Route path="/miscellaneous" component={Miscellaneous} />,
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
