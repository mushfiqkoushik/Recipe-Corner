import React from "react";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";



const Layout = () => {
  return (
    <div>
      
      <Nav/>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
