document.addEventListener("DOMContentLoaded", function () {
    // Select all anchor links that start with a hash symbol (#)
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        // Add a click event listener to each of these links
        anchor.addEventListener("click", function (e) {
            // Prevent the default click behavior (jumping directly to the target element)
            e.preventDefault();
            // Smoothly scroll to the target element
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth",
            });
        });
    });
});
