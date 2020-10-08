import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import loadable from "@loadable/component";
import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";
import "./media.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";

const Dashboard = loadable(() => import("./Dashboard"));
const Profile = loadable(() => import("./Profile"));
const Information = loadable(() => import("./Profile/page/Information"));
const AddPhone = loadable(() => import("./Profile/page/AddPhone"));
const ManagePhone = loadable(() => import("./Profile/page/ManagePhone"));
const Password = loadable(() => import("./Profile/page/Password"));
const Pin = loadable(() => import("./Profile/page/Pin"));
const TopUp = loadable(() => import("./Topup"));
const Transfer = loadable(() => import("./Transfers"));
const Input = loadable(() => import("./Transfers/pages/Input"));

function App() {
  return (
    <>
      <Header />
      <main className="main__content mt-5">
        <div className="container">
          <div className="row">
            <Router>
              <div className="col-md-12 col-lg-3">
                <Sidebar />
              </div>
              <div className="col-md-12 col-lg-9">
                <Switch>
                  <Route exact path="/" component={Dashboard}></Route>
                  <Route path="/profile" component={Profile}></Route>
                  <Route path="/pin" component={Pin}></Route>
                  <Route path="/information" component={Information}></Route>
                  <Route path="/password" component={Password}></Route>
                  <Route path="/phone/add" component={AddPhone}></Route>
                  <Route path="/phone/manage" component={ManagePhone}></Route>
                  <Route path="/topup" component={TopUp}></Route>
                  <Route path="/transfer" component={Transfer}></Route>
                  <Route path="/transaction" component={Input}></Route>
                </Switch>
              </div>
            </Router>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
