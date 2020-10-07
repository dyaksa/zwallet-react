import React from "react";
import loadable from "@loadable/component";
import "bootstrap/dist/css/bootstrap.min.css";
import "./asset/sidebar.css";
const Nav = loadable(() => import("./components/Nav"));

const Sidebar = () => {
  return (
    <aside className="sidenav">
      <Nav />
    </aside>
  );
};

export default Sidebar;
