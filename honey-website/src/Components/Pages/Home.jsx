import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Optional for external styling

const Home = () => {
    return (
        <main>
            <section className="hero">
                <h1>Pure Organic Honey</h1>
                <p>Experience the natural sweetness</p>

                <Link to="/product">
                    <button type="button" className="btn btn-success">
                        Buy Now
                    </button>
                </Link>
            </section>

            <section className="product-details">
                <h2>Why Our Honey?</h2>
                <p>
                    Our honey is 100% organic, sourced from the best apiaries,
                    ensuring quality and purity.
                </p>
            </section>

            <section className="testimonials">
                <h2>Customer Testimonials</h2>
                <div className="testimonial">
                    <p>"This is the best honey I have ever tasted!"</p>
                    <span>- Abhishek Gupta</span>
                </div>
            </section>
        </main>
    );
};

export default Home;
