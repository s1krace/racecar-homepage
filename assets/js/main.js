var featureBoxes = document.querySelectorAll('.feature-box');
var i = 0;
setInterval(function() {
    featureBoxes[i].classList.remove('active');
    i++;
    if (i == featureBoxes.length) {
        i = 0;
    }
    featureBoxes[i].classList.add('active');
}, 2000);