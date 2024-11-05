document.addEventListener('DOMContentLoaded', function() {
    const backToTop = document.getElementById("backToTop");
    
    if (backToTop) {
        // Show/hide button based on scroll position
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                backToTop.classList.remove("hidden");
                backToTop.classList.add("flex");
            } else {
                backToTop.classList.remove("flex");
                backToTop.classList.add("hidden");
            }
        });

        // Scroll to top when clicked
        backToTop.addEventListener("click", (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
});