
const findBlockByAlias = (alias) =>{
    return $(".reviews-block-inner").filter((ndx, item) => {
            return $(item).attr("data-linked-with") == alias;
    })
}
$(".interactive-avatar-link").on("click", function(e){
    e.preventDefault();
    const $this = $(e.currentTarget);
    const target = $this.attr("data-open");
    const itemToShow = findBlockByAlias(target);
    const curItem = $this.closest(".interactive-avatar")

    itemToShow.addClass("active").siblings().removeClass("active")
    curItem.addClass("active-active").siblings().removeClass("active-active");

})