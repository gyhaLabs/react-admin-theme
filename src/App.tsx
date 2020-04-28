import { createMuiTheme } from "@material-ui/core/styles";
import * as React from "react";
import { Admin, Resource } from "react-admin";
import {
  FirebaseAuthProvider,
  FirebaseDataProvider,
  RAFirebaseOptions,
} from "react-admin-firebase";
import NotFound from "./components/404/NotFound";
import CustomLoginPage from "./components/auth/LoginPage";
import AppLayout from "./components/layout/AppLayout";
import Dashboard from "./components/pages/Dashboard";
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

class App extends React.Component {
  render() {
    return (
      <Admin
        layout={AppLayout}
        title="Demo App"
        theme={theme}
        catchAll={NotFound}
        dashboard={Dashboard}
        dataProvider={dataProvider}
        authProvider={authProvider}
        loginPage={CustomLoginPage}
      >
        <Resource
          name="posts"
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
