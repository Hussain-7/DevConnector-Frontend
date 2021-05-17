import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./components/layout/Landing";
import Navbar from "./components/layout/Navbar";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Alert from "./components/layout/Alert";
import { setAuthToken } from "./@axios/index";
import Dashboard from "./components/dashboard/Dashboard";
import { loadUser } from "./redux/auth/actionCreater";
import "./App.css";

//Redux
//This is what combines react and redux
import { Provider } from "react-redux";
import store from "./redux/store";
import PrivateRoute from "./routing/PrivateRoute";
import ProfileForm from "./components/profile-forms/ProfileForm";
import AddProfile from "./components/profile-forms/AddProfile";
import AddEducation from "./components/profile-forms/AddEducation";
import AddExperience from "./components/profile-forms/AddExperience";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Fragment>
            <Navbar />
            <Route exact path="/" component={Landing} />
            <section className="container">
              <Alert />
              <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/Register" component={Register} />
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                <PrivateRoute
                  exact
                  path="/edit-profile"
                  component={AddProfile}
                />
                <PrivateRoute
                  exact
                  path="/add-education"
                  component={AddEducation}
                />
                <PrivateRoute
                  exact
                  path="/add-experience"
                  component={AddExperience}
                />
                <PrivateRoute
                  exact
                  path="/create-profile"
                  component={ProfileForm}
                />
              </Switch>
            </section>
          </Fragment>
        </Router>
      </Provider>
    </div>
  );
};
export default App;
