const sections = $("section")
const display = $(".maincontent")
const sideMenu = $(".fixed-menu");
const menuItems = sideMenu.find(".fixed-menu-item");

const mobileDetect = new MobileDetect(window.navigator.userAgent);
const isMobile = mobileDetect.mobile();

let inScroll = false;
sections.first().addClass("active")

const countSectionPosition = sectionEq => {
    return sectionEq * -100;
}

const changeMenuThemeForSection = sectionEq => {
            const currentSection = sections.eq(sectionEq);
            const menuTheme = currentSection.attr("data-sidemenu-theme");
            const activeClass = "shadowed";
        if (menuTheme == "black") {
            sideMenu.addClass(activeClass)
        } else {
            sideMenu.removeClass(activeClass)

        }
}

const resetActiveClassForItem = (items, itemEq, activeClass) => {
    items.eq(itemEq).addClass(activeClass).siblings().removeClass(activeClass);
}

const performTransition = sectionEq => {
    if( inScroll) return;

    const transitionOver = 1000;
    const mouseInertiaOver = 300;
        inScroll = true;

        const position = countSectionPosition(sectionEq);

changeMenuThemeForSection(sectionEq);

    display.css({
        transform: `translateY(${position}%)`
    });

    resetActiveClassForItem(sections, sectionEq, "active")


    setTimeout(() => {
        inScroll = false;

resetActiveClassForItem(menuItems, sectionEq, "fixed-menu-item-active");
    }, transitionOver + mouseInertiaOver);
   };

const scrollViewport = (direction) => {
    
    const activeSection = sections.filter(".active");
    const nextSection = activeSection.next()
    const prevSection = activeSection.prev()

    if (direction == "next" && nextSection.length){
        performTransition(nextSection.index())
    }
    if (direction == "prev" && prevSection.length){
        performTransition(prevSection.index())

    }
}


$(window).on("wheel", e => {
    const deltaY = e.originalEvent.deltaY;

    if(deltaY > 0){
        scrollViewport("next")
        };

    if(deltaY < 0){
        scrollViewport("prev");
    }
});

$(window).on("keydown", e => {
const tagName = e.target.tagName.toLowerCase();
const userTypingInInputs = tagName == "input" || tagName == "textarea";

if (userTypingInInputs) return;
switch(e.keyCode){
    case 38: scrollViewport("prev");
    break;

    case 40: scrollViewport("next");
    break;

}

});

$(".wrapper").on("touchmove", e => e.preventDefault())


$("[data-scroll-to]").on("click", e => {
    e.preventDefault();
    const $this = $(e.currentTarget);
    const target = $this.attr("data-scroll-to");
    const reqSection = $(`[data-section-id=${target}]`);

    performTransition(reqSection.index())
})


if (isMobile) {
    $("body").swipe( {
    swipe:function(event, direction) {
            var scroller = viewportScroller() ;////wtf????
            let scrollDirection = "";

            if (direction == "up") scrollDirection == "next";
            if (direction == "down") scrollDirection == "prev";
            scroller[scrollDirection]();
            
    },
  });
}

