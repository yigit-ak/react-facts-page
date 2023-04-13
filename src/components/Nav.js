import React from "react"
import navLogo from "../images/react-logo.png"

export default function Nav() {
    return (
        <nav>
            <img
                src={navLogo}
                alt="React Logo"
                className="nav--logo"
            />
            <h3 className="nav--logo-text">React Facts</h3>
            <h4 className="nav--title">Recat Project - 1</h4>
        </nav>
    );
}