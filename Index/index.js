const scrollingDiv = document.getElementById('scrollingDiv');

let lastScrollPosition = window.scrollY;

window.addEventListener('scroll', () => {
    const currentScrollPosition = window.scrollY;

    if (currentScrollPosition > lastScrollPosition) {
        // Scrolling down
        scrollingDiv.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        scrollingDiv.style.transform = 'translateY(0px)';
    }

    lastScrollPosition = currentScrollPosition;
});

// Optional: Add smooth scrolling to the top when clicking the div
scrollingDiv.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});