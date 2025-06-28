window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (loader) {
        // Add a small delay to ensure all content is rendered
        setTimeout(() => {
            loader.classList.add('fade-out');
        }, 500);
    }
});
