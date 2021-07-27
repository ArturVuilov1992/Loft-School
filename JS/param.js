const rectangle = document.querySelector(".slider__rectangle");
const rectangleBlock = document.querySelector(".rectangle__list");

rectangle.addEventListener("mouseover", (e) =>{
    if("mouseover"){
            rectangleBlock.classList.remove("reemoovee");
    }
    else if ("mouseout") {
        rectangleBlock.classList.add("reemoovee");
    }
})