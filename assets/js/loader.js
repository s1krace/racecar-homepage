window.addEventListener("DOMContentLoaded", function() {
    const loader = document.getElementById("loader");
    const progress = document.querySelector(".progress");

    if (loader && progress) {
        loader.style.opacity = "1";
        loader.style.visibility = "visible";

        let width = 0;
        const interval = setInterval(function() {
            if (width >= 100) {
                clearInterval(interval);
                setTimeout(() => {
                    loader.style.opacity = "0";
                    loader.style.visibility = "hidden";
                }, 200);
            } else {
                width++;
                progress.style.width = width + "%";
            }
        }, 10);
    }
});