import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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

function App() {
  return (
    <Router>
      <Switch>
        <Route exact component={Auth} path="/login"/>
        <Route exact component={Dashboard} path="/dashboard"/>
        <Route exact component={Transfer} path="/transfer"/>
        <Route exact component={Profile} path="/profile"/>
        <Route exact component={Topup} path="/topup"/>
        <Route component={ProfileInformation} path="/profile/information" />
        <Route component={Pin} path="/profile/pin"/>
        <Route component={Password} path="/profile/password"/>
        <Route component={Phone} path="/profile/phone"/>
      </Switch>
    </Router>
  );
}

export default App;
