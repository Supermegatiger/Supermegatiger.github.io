import images from '../data/images.json' assert {type: 'json'};
window.addEventListener("DOMContentLoaded", function () {
    let sl = document.getElementsByClassName("slider")[0];
    for(var i = 0; i < 16; i++){
        sl.innerHTML += "<div><a href='" + images[i].image + "' target='d'><img class='divImgs' src='" + images[i].image + "' alt='" + images[i].name + "' title='" + images[i].name +"'></a></div>"
    }
    $('.slider').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        dots:true,
        responsive: [
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });
});