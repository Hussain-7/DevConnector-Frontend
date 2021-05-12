import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Landing from "./components/layout/Landing";
import Navbar from "./components/layout/Navbar";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Alert from "./components/layout/Alert";
import "./App.css";
//Redux
//This is what combines react and redux
import { Provider } from "react-redux";
import store from "./redux/store";
const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Fragment>
            <Navbar />
            <Route exact path="/" component={Landing} />
            <section className="container">
              <Alert/>
              <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/Register" component={Register} />
              </Switch>
            </section>
          </Fragment>
        </Router>
      </Provider>
    </div>
  );
};
export default App;
