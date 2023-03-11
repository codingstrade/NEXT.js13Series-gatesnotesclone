import React from "react";
import Navbar from "./Navbar";
import NavbarTop from "./NavbarTop";

const Layout = ({ children }) => {
  return (
    <>
      <NavbarTop />
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
