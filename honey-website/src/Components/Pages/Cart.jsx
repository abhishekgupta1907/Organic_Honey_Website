import React from "react";
import { RxCross2 } from "react-icons/rx";
import "./Cart.css";
const Cart = ({
    showCartIcon,
    cart,
    setCart,
    addToCart,
    removeFromCart,
    handleCheckout,
}) => {
    return (
        <div className="cart-items">
            <div className="carts-items-title">
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            {cart.length > 0 && (
                <div className="cart-summary">
                    <ul className="list-group">
                        {cart.map((item, index) => (
                            <div className="list-group-items" key={index}>
                                <div>{item.name}</div>
                                <div> ${item.price}</div>
                                <div>{item.quantity}</div>
                                <div> ${item.price * item.quantity}</div>
                                <RxCross2
                                    className="remove-button"
                                    onClick={() => removeFromCart(item)}
                                />
                            </div>
                        ))}
                    </ul>
                    <button onClick={handleCheckout}>
                        Proceed to Checkout
                    </button>
                </div>
            )}
        </div>
    );
};

export default Cart;
