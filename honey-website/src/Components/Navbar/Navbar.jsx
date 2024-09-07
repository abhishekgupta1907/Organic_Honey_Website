import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Optional, if you want to style separately

const Navbar = () => {
    return (
        <header>
            <nav className="nav">
                <div className="logo">Organic Honey</div>
                <div className="list">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/product">Product</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
