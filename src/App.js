import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./router/PrivateRoute";
import PublicRoute from "./router/PublicRoute";
import "./main.css";
import "./media.css";
import Dashboard from "./Page/Dashboard";
import Transfer from "./Page/Transfer";
import Profile from "./Page/Profile";
import ProfileInformation from "./Page/PersonalInformation";
import Pin from "./Page/Pin";
import Password from "./Page/Password";
import Phone from "./Page/Phone";
import Topup from "./Page/Topup";
import Auth from "./Page/Auth";
import NotFound from "./Page/NotFound";

function App() {
  return (
    <Router>
      <Switch>
        <PublicRoute exact component={Auth} restricted={true} path="/login"/>
        <PrivateRoute exact component={Dashboard} path="/dashboard"/>
        <PrivateRoute exact component={Transfer} path="/transfer"/>
        <PrivateRoute exact component={Profile} path="/profile"/>
        <PrivateRoute exact component={Topup} path="/topup"/>
        <PrivateRoute component={ProfileInformation} path="/profile/information" />
        <PrivateRoute component={Pin} path="/profile/pin"/>
        <PrivateRoute component={Password} path="/profile/password"/>
        <PrivateRoute component={Phone} path="/profile/phone"/>
        <Route exact path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
