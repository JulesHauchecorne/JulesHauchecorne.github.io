import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <Router>
        <nav className="navbar">
          <Link to="/">Home</Link>
        </nav>
      </Router>
    </>
  );
}

export default Navbar;
