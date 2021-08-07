const openItem = item => {
  const li = item.closest(".team__item");
  const wrap = li.find(".team__content");
  const text = wrap.find(".team__content-block");
  const textHeight = text.height();
  li.addClass("active");
  wrap.height(textHeight);
 }
const closeEveryItem = (ul) => {
  const wrap = ul.find(".team__content");
 const li = ul.find(".team__item"); 
  li.removeClass("active");
  wrap.height(0);
};
$(".team__title").on("click", function (e){
const $this = $(e.currentTarget);
const ul = $this.closest(".team");
const li = $this.closest(".team__item");
if (li.hasClass("active")) {
  closeEveryItem(ul);
} else {
closeEveryItem(ul);
openItem($this);
};})