$(".products_menu-link").on("click", e => {
e.preventDefault();

function openItem (content) {// li
    const hiddenContent = content.find(".products_menu-container");// container
    const reqWidth = mesureWidth(content);
    const textBlock = item.find(".products_menu-text")// text block
    content.addClass(".products_menu-container-active");
    hiddenContent.width(reqWidth.container);// container width
    textBlock.width(reqWidth.textContainer);// text width
    const isMobile = window.matchMedia("(max-width: 480px)").matches;
    if(isMobile){content.addClass("mobilemenu")}////????????
    };

const mesureWidth = item => {//li
    let regItemWidth = 0;
    const screenWidth = $(window).width();
    const container = item.closest(".products_menu");//ul
    const titlesBlocks = container.find(".products_menu-link");//link
    const titlesWidth = titlesBlocks.width() * titlesBlocks.length;// li width sum in px
    const textContainer = item.find(".products_menu-text");//text
    const marginLeft = parseInt(textContainer.css("margin-left") + "rem");//text paddingLeft
    const marginRight = parseInt(textContainer.css("margin-right") + "rem");//text paddingRight
    const isTablet = window.matchMedia("(max-width: 768px)").matches;

    if (isTablet){
        regItemWidth =  screenWidth - titlesWidth;
    } else {
        regItemWidth =  40 + "vw"
    }
    return {
        container: regItemWidth,
        textContainer: regItemWidth - marginRight - marginLeft,
    }
};

function closeEveryItemInContainer (container) {
    const items = container.find(".products_menu-item");
    const content = container.find(".products_menu-container");
    items.removeClass(".products_menu-container-active mobilemenu");
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
    openItem(item);//li
}
});
