import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const [activeLink, setActiveLink] = useState("home");

  return (
    <>
      <Navbar activeLink={activeLink} setActiveLink={setActiveLink} />
      {children}
      <Footer setActiveLink={setActiveLink} />
    </>
  );
};

export default Layout;
