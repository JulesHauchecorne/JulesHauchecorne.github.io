import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Navbar.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
    const [isNavOpen, setNavOpening] = useState(false);

    return (
        <>
            <Router>
                <div className="container">
                    <button
                        className="btn"
                        onClick={() => {
                            setNavOpening(!isNavOpen);
                        }}
                    >
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>
                <div className={isNavOpen ? "open" : "closed"}>
                    <div className="navbar">
                        <Link to="/" className="link">
                            Home
                        </Link>
                        <Link to="/" className="link">
                            Contact
                        </Link>
                        <Link to="/" className="link">
                            About
                        </Link>
                    </div>
                </div>
            </Router>
        </>
    );
}

export default Navbar;
