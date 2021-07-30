
const findBlockByAlias = (alias) =>{
    return $(".reviews-block-inner").filter((ndx, item) => {
            return $(item).attr("data-linked-with") == alias; //return li item which == alias
    })
}
$(".interactive-avatar-link").on("click", function(e){
    e.preventDefault();
    const $this = $(e.currentTarget);//clicked point
    const target = $this.attr("data-open");//exact point,our interactive link with data
    const itemToShow = findBlockByAlias(target);// li item == target == interactive link
    const curItem = $this.closest(".interactive-avatar") //curitem == closest interactive link

    itemToShow.addClass("active").siblings().removeClass("active")
    curItem.addClass("active-active").siblings().removeClass("active-active");

})