const sections = $("section")
const display = $(".maincontent")

const performTransition = sectionEq => {
    const position = sectionEq * -100;

    display.css({
        transform: `translateY(${position}%)`
    })
}

$(window).on("wheel", e => {
    const deltaY = e.originalEvent.deltaY;

    if(deltaY > 0){
        performTransition(2)
        };

    if(deltaY < 0){
        ///prev
    };
})