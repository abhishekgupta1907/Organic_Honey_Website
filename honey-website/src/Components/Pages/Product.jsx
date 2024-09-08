import React, { useEffect } from "react";
import "./Product.css";

const products = [
    {
        id: 1,
        name: "Organic Wildflower Honey",
        price: 15.99,
        description: "Raw, unfiltered honey from wildflowers.",
    },
    {
        id: 2,
        name: "Manuka Honey",
        price: 29.99,
        description: "Premium Manuka honey from New Zealand.",
    },
    {
        id: 3,
        name: "Clover Honey",
        price: 12.99,
        description: "Smooth and sweet honey from clover flowers.",
    },
    {
        id: 4,
        name: "Acacia Honey",
        price: 18.99,
        description: "Light and mild honey, perfect for tea and desert",
    },
    {
        id: 5,
        name: "Buckwheat Honey",
        price: 16.99,
        description:
            "Dark and rich honey with a strong flavor, great for baking.",
    },
    {
        id: 6,
        name: "Eucalyptus Honey",
        price: 19.99,
        description:
            "Honey with a hint of eucalyptus, great for soothing throats.",
    },
    {
        id: 7,
        name: "Orange Blossom Honey",
        price: 14.99,
        description:
            "Floral honey with a sweet citrus aroma, perfect for salads.",
    },
    {
        id: 8,
        name: "Sourwood Honey",
        price: 22.99,
        description:
            "Rare honey with a sweet and spicy flavor from sourwood trees.",
    },
    {
        id: 9,
        name: "Lavender Honey",
        price: 24.99,
        description:
            "Fragrant honey with a delicate lavender flavor, ideal for gourmet dishes.",
    },
    {
        id: 10,
        name: "Thyme Honey",
        price: 17.99,
        description:
            "Honey with a subtle thyme flavor, great for marinades and dressings.",
    },
];

const Product = ({
    showCartIcon,
    cart,
    setCart,
    addToCart,
    removeFromCart,
    handleCheckout,
}) => {
    useEffect(() => {
        showCartIcon(true);
    });

    return (
        <main className="container">
            <h1>Honey Products</h1>
            <div className="product-list">
                {products.map((product) => (
                    <div key={product.id}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">
                                    {product.description}
                                </p>
                                <p className="card-text">
                                    <strong>${product.price}</strong>
                                </p>
                                <button onClick={() => addToCart(product)}>
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default Product;
