const arrows = document.querySelectorAll(".arrow");
const leftarrow = document.querySelector(".arrow-left");
const rightarrow = document.querySelector(".arrow-right");
const sliderItem = document.querySelector(".slider__item").length;
const slider = document.querySelector(".slider__list");
let startIndex = 0;


arrows.forEach((arrow) => {
    arrow.addEventListener("click", function (e) {
        e.preventDefault();
        const width = document.querySelector(".slider__item").clientWidth;
        if (arrow.classList.contains("arrow-left")) {
            if (startIndex !== sliderItem - 1) {
                startIndex++;           
             } else {
                startIndex = 0;
            } 




            
        } else {
            if (startIndex > 0) {
                startIndex--;
            } else {
                startIndex = sliderItem - 1;
            }
        }
            slider.style.left = "-" + startIndex * width + "px";
    })




})