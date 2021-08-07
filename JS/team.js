const openItem2 = (item) => {
    const li = item.closest(".team__item");
    const wrap = li.find(".team__content");
    const text = wrap.find(".team__content-block");
    const textHeight = text.height();

    li.addClass("active");
    wrap.height(textHeight);
   }


const closeEveryItem2 = (ul) => {
    const wrap = ul.find(".team__content");
   const li = ul.find(".team__item");

    li.removeClass("active");
    wrap.height(0);
};

///$(".team__title").on("click", function (e){
const $this = $(e.currentTarget);
const ul = $this.closest(".team");
const li = $this.closest(".team__item");
//$(".team__title::before").css('transform','rotate('+180+'deg)');//??????


//if (li.hasClass("active")) {
  //  closeEveryItem2($this);
//} else {
//closeEveryItem2($this);
//openItem2($this);
//};
//})