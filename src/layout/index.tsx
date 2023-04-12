import React from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <menu>star wars api</menu>
      <Outlet /> {/* Home */}
    </div>
  );
};

export default Layout;
