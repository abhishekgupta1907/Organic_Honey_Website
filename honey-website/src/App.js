import React, { useContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Product from "./Components/Pages/Product";
import Contact from "./Components/Pages/Contact";
import Cart from "./Components/Pages/Cart";
import { StoreContext } from "./Context/Context";

const App = () => {
    const {
        cartIcon,
        showCartIcon,
        cart,
        setCart,
        addToCart,
        removeFromCart,
        handleCheckout,
    } = useContext(StoreContext);
    return (
        <Router>
            <Navbar
                cartIcon={cartIcon}
                showCartIcon={showCartIcon}
                cart={cart}
            />
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
                    element={
                        <Product
                            showCartIcon={showCartIcon}
                            cart={cart}
                            setCart={setCart}
                            addToCart={addToCart}
                            handleCheckout={handleCheckout}
                            removeFromCart={removeFromCart}
                        />
                    }
                />
                <Route
                    path="/contact"
                    element={<Contact showCartIcon={showCartIcon} />}
                />
                <Route
                    path="/cart"
                    element={
                        <Cart
                            showCartIcon={showCartIcon}
                            cart={cart}
                            setCart={setCart}
                            addToCart={addToCart}
                            handleCheckout={handleCheckout}
                            removeFromCart={removeFromCart}
                        />
                    }
                />
            </Routes>
        </Router>
    );
};

export default App;
