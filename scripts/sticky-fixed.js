const element = document.querySelector('.first');

window.addEventListener('scroll', function() {
    
    if (window.pageYOffset < 70) {
        element.classList.add('sticky');
    } else {
        element.classList.remove('sticky');
    }
});
