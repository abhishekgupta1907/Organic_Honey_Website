import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Product from "./Components/Pages/Product";
import Contact from "./Components/Pages/Contact";

const App = () => {
    const [cartIcon, showCartIcon] = useState(false);
    return (
        <Router>
            <Navbar cartIcon={cartIcon} showCartIcon={showCartIcon} />
            <Routes>
                <Route
                    path="/"
                    element={<Home showCartIcon={showCartIcon} />}
                />
                <Route
                    path="/about"
                    element={<About showCartIcon={showCartIcon} />}
                />
                <Route
                    path="/product"
                    element={<Product showCartIcon={showCartIcon} />}
                />
                <Route
                    path="/contact"
                    element={<Contact showCartIcon={showCartIcon} />}
                />
            </Routes>
        </Router>
    );
};

export default App;
