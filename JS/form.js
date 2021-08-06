const form = document.querySelector('.form');
const send = document.querySelector('.btn__form');
const server = document.querySelector(".server");
send.addEventListener('click', event => {
event.preventDefault();
if (validateForm(form)) {
            const data = {
                name: form.elements.name.value,
                phone: form.elements.phone.value,
                comment: form.elements.comments.value,
                to: 'test@test.com',
            };
const xhr = new XMLHttpRequest();
            xhr.responseType = "json";
            xhr.open("POST", "https://webdev-api.loftschool.com/sendmail");
            xhr.setRequestHeader('content-type', 'application/json');
            xhr.send(JSON.stringify(data));
            xhr.addEventListener("load", () =>{
                if(xhr.response){
                $(".server").find('.server__text').text(xhr.response.message);
                $(".server").removeClass('server__hidden')
                console.log(xhr.response)}})
        console.log("data is sent")
          }
function validateForm(form) {let valid = true;if(!validateField(form.elements.name)){valid = false;}
​console.log(form.elements.phone);if(!validateField(form.elements.phone)){valid = false;}
​    if (!validateField(form.elements.comments)) {
        valid = false;
    }
    return valid;
​}
​function validateField(field) {
​    if (!field.checkValidity()) {
        field.classList.add("error");
        return false;
    } 
​    else {
        field.classList.remove("error");
        return true;}
    }
​  })
​$(".server__link").on("click", e => {
        e.preventDefault();
        $(".server").addClass('server__hidden');
    });
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