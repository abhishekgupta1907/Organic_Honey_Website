import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Product from "./Components/Pages/Product";
import Contact from "./Components/Pages/Contact";
import Cart from "./Components/Pages/Cart";

const App = () => {
    const [cartIcon, showCartIcon] = useState(false);
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        const existingItem = cart.find((item) => item.id === product.id);

        if (existingItem) {
            setCart(
                cart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            );
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };
    const handleCheckout = () => {
        alert(
            "Thank you for shopping with us. Your order will be processed shortly."
        );
    };
    const removeFromCart = (product) => {
        const existingItem = cart.find((item) => item.id === product.id);

        if (existingItem.quantity === 1) {
            setCart(cart.filter((item) => item.id !== product.id));
        } else {
            setCart(
                cart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
            );
        }
    };
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
