var featureBoxes = document.querySelectorAll('.feature-box');
var i = 0;
setInterval(function() {
    if (featureBoxes.length > 0) {
        featureBoxes.forEach(box => box.classList.remove('active'));
        i = (i + 1) % featureBoxes.length;
        featureBoxes[i].classList.add('active');
    }
}, 2000);