import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Optional, if you want to style separately
import { FaShoppingCart } from "react-icons/fa";
const Navbar = ({ cartIcon }) => {
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
                        {cartIcon ? (
                            <div>
                                {" "}
                                <li className="cart-img">
                                    <Link to="/cart">
                                        <FaShoppingCart />
                                    </Link>
                                </li>
                                <div></div>
                            </div>
                        ) : (
                            <></>
                        )}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
