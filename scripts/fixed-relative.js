const lastElement = document.querySelector('.last');

window.addEventListener('scroll', function() {
    
    if (window.pageYOffset >= 3095) {
        lastElement.classList.add('relative');
    } else {
        lastElement.classList.remove('relative');
    }
});
