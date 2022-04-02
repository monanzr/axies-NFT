$(document).ready(function() {
    $('.carousel_01').owlCarousel({
        items: 10,
        loop: true,
        margin: 30,
        nav: true,

        mouseDrag: true,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            767: {
                items: 3
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });


});


document.querySelector(".light__mood").addEventListener("click", function () {
    document.querySelector("html").classList.add("light__theme");
});
document.querySelector(".dark__mood").addEventListener("click", function () {
    document.querySelector("html").classList.remove("light__theme");
});
