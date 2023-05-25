var elements_to_watch = document.querySelectorAll('section');
var threshold;

const site = window.location.pathname;

if (site == "/") {
    threshold = 0.6;
} else if (site == "/Team.html") {
    threshold = 0.55;
}

var callback = function (items) {
    items.forEach((item) => {
        if (item.isIntersecting) {
            item.target.classList.add("in-page");
        } else {
            item.target.classList.remove("in-page");
        }
    });

    elements_to_watch.forEach((element) => {

        if (element.offsetTop + window.innerHeight * (1 - threshold) <= window.pageYOffset) {
            element.classList.add("out-page");
        } else {
            element.classList.remove("out-page");
        }
    });
}

var observer = new IntersectionObserver(callback, { threshold: threshold });

if (window.innerWidth > 900) {
    elements_to_watch.forEach((element) => {
        observer.observe(element);
    });
}