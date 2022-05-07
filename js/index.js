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
                items: 1
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


function countDownDate(date, element) {
    var now = new Date().getTime();
    var distance = date - now;
    
    var days = Math.floor(distance % (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   var seconds = Math.floor((distance % (1000 * 60)) / 1000);


   element.innerHTML = days + " : " + hours + " : " + minutes + " : " + seconds;
    
  if (distance < 0) {
    element.innerHTML = "EXPIRED";
  } else {
    setTimeout(countDownDate,1000);
  }
}

const classNAme = document.getElementsByClassName("counter__text");
for (let i = 0; i < classNAme.length; i++) {
    countDownDate(
        new Date("Jan 5, 2023 15:37:25").getTime(),
        classNAme[i]
    )
    countDownDate(
        new Date("April 5, 2023 15:37:25").getTime(),
        classNAme[1]
    )
    countDownDate(
        new Date("Jan 5, 2024 15:37:25").getTime(),
        classNAme[3]
    )
}

countDownDate(
    new Date("Jan 5, 2023 15:37:25").getTime(),
    document.querySelectorAll(".counter__text")
)

// countDownDate(
//     new Date("May 5, 2023 15:37:25").getTime(),
//     document.getElementById("counter__timer2")
// )

// countDownDate(
//     new Date("April 5, 2023 15:37:25").getTime(),
//     document.getElementById("counter__timer5")
// )
