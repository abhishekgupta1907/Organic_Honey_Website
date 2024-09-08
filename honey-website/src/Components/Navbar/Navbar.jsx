import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaShoppingCart } from "react-icons/fa";
const Navbar = ({ cartIcon, cart }) => {
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
                        {cartIcon || cart.length > 0 ? (
                            <div>
                                {" "}
                                <li className="cart-img">
                                    <Link to="/cart">
                                        <FaShoppingCart />
                                    </Link>
                                </li>
                                <div
                                    className={cart.length === 0 ? "" : "dot"}
                                ></div>
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
