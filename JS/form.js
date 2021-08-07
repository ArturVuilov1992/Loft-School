const form = document.querySelector('.form');
const send = document.querySelector('.btn__form');
const server = document.querySelector(".server");
const body = document.querySelector("body");
const html = document.querySelector("html");




send.addEventListener('click', event => {

event.preventDefault();
const scroll = function disableScrolling(window){
    var x=window.scrollX;
    var y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
}
//body.classList.add("formscroll");
//html.classList.add("fixed");
//document.body.style.overflow = 'hidden';
//window.onscroll = function () { window.scrollTo(0, 0); };
//disableScrolling(window);


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
        console.log("data is sent");                

          }
function validateForm(form) {
    let valid = true;
    if(!validateField(form.elements.name)){
        valid = false;
    }
    console.log(form.elements.phone);

    if(!validateField(form.elements.phone)){
        valid = false;
    }
    if (!validateField(form.elements.comments)) {
        valid = false;
    }
    return valid;
}
function validateField(field) {
    if (!field.checkValidity()) {
        field.classList.add("error");
        return false;
    }
    else {
        field.classList.remove("error");
        return true;}
    }
})
$(".server__link").on("click", e => {
        e.preventDefault();
        $(".server").addClass('server__hidden');
    });
