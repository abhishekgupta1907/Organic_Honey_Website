import React, { useEffect } from "react";
import "./About.css"; // Optional for external styling

const About = ({ showCartIcon }) => {
    useEffect(() => {
        showCartIcon(false);
    });
    return (
        <main className="about container my-5">
            <section className="text-center">
                <h1>About Us</h1>
                <p className="lead">
                    Welcome to Organic Honey! This website is designed and
                    developed by Abhishek Gupta, a passionate web developer and
                    designer.
                </p>
            </section>

            <section className="bio my-5">
                <h2>Meet the Designer</h2>
                <div className="bio-content">
                    <p>
                        Hi, I'm Abhishek Gupta, the sole designer and developer
                        behind this website. With a passion for creating
                        aesthetically pleasing and highly functional websites, I
                        specialize in responsive design, ensuring that this
                        website provides a seamless experience on all devices.
                    </p>
                    <p>
                        Organic Honey is a project close to my heart, combining
                        my skills in web development with my appreciation for
                        natural, organic products. Every part of this website,
                        from the user interface to the backend, has been
                        meticulously crafted to provide you with the best
                        experience.
                    </p>
                </div>
            </section>

            <section className="vision my-5">
                <h2>Our Vision</h2>
                <p>
                    At Organic Honey, we aim to provide pure, high-quality honey
                    while offering an exceptional online shopping experience. We
                    believe in transparency and simplicity, and this website
                    reflects those values.
                </p>
            </section>
        </main>
    );
};

export default About;
