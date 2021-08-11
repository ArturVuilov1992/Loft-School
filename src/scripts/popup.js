"use strict"

const popup = document.querySelector(".popup")
const hamburger = document.querySelector(".hamburger")
const vector = document.querySelector(".vector")

hamburger.addEventListener("click", e => {
    e.preventDefault();
    popup.classList.remove('popup__hidden');
});

vector.addEventListener("click", e => {
    e.preventDefault();
    popup.classList.add('popup__hidden');
});

popup.addEventListener("mouseover", e => {
    e.target.style.color = "red";
    e.relatedTarget.style.color = "white";
})
