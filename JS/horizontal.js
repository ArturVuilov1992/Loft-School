$(".products_menu-link").on("click", e => {
e.preventDefault();
function openItem (content) {
    const hiddenContent = content.find(".products_menu-container");
    const reqWidth = mesureWidth(content);
    const textBlock = item.find(".products_menu-text")
    content.addClass(".products_menu-container-active");
    hiddenContent.width(reqWidth.container);
    textBlock.width(reqWidth.textContainer);
};
const mesureWidth = item => {
    let regItemWidth = 0;
    const screenWidth = $(window).width();
    const container = item.closest(".products_menu");
    const titlesBlocks = container.find(".products_menu-link");
    const titlesWidth = titlesBlocks.width() * titlesBlocks.length;
    const textContainer = item.find(".products_menu-container");
    const paddingLeft = parseInt(textContainer.css("padding-left"));
    const paddingRight = parseInt(textContainer.css("padding-right"));
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile){
        regItemWidth =  screenWidth - titlesWidth;
    } else {
        regItemWidth =  500;
    }
    return {
        container: regItemWidth,
        textContainer: regItemWidth - paddingRight - paddingLeft
    }
};

function closeEveryItemInContainer (container) {
    const items = container.find(".products_menu-item");
    const content = container.find(".products_menu-container");
    items.removeClass(".products_menu-container-active");
    content.width(0);
};
const $this = $(e.currentTarget);
const item = $this.closest(".products_menu-item");
const itemOpened = item.hasClass(".products_menu-container-active");
const container = $this.closest(".products_menu")



if (itemOpened) {
    closeEveryItemInContainer(container)
} else {
    closeEveryItemInContainer(container)
    openItem(item);
}
});


//$(".products_menu-item").on("click", e =>{
//    e.preventDefault();

//    closeEveryItemInContainer(".products_menu");
//})