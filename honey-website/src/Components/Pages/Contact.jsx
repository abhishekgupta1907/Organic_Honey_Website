import React, { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form data submitted:", formData);
        // Add your form submission logic here
    };

    return (
        <main>
            <section className="contact container my-5">
                <h1>Contact Us</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="name@example.com"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <label htmlFor="email">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                        <textarea
                            className="form-control"
                            id="message"
                            placeholder="Leave a message here"
                            style={{ height: "100px" }}
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                        <label htmlFor="message">Message</label>
                    </div>
                    <button type="submit" className="btn btn-success">
                        Send Message
                    </button>
                </form>
            </section>
        </main>
    );
};

export default Contact;
