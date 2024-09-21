import { createContext, useState } from "react";
export const StoreContext = createContext(null);
const StoreContextProvider = ({ children }) => {
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
    const contextValue = {
        cartIcon,
        showCartIcon,
        cart,
        setCart,
        addToCart,
        removeFromCart,
        handleCheckout,
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    );
};
export default StoreContextProvider;
