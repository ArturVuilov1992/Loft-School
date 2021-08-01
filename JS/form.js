const form = document.querySelector('.form');
const send = document.querySelector('.btn__form');
const server = document.querySelector(".server");



send.addEventListener('click', event => {
    event.preventDefault();

    if (validateForm(form)) {
            const data = {
                name: form.elements.name.value,
                phone: form.elements.phone.value,
                comments: form.elements.comments.value
            };

            const xhr = new XMLHttpRequest();
            xhr.responseType = "json";
            xhr.open("POST", "https://webdev-api.loftschool.com/sendmail");
            xhr.setRequestHeader('content-type', 'application/json');
            xhr.send(JSON.stringify(data));
            xhr.addEventListener("load", () =>{if(xhr.response){    $(".server").removeClass("server__hidden");
            )}})
        console.log("data is sent")
    }



function validateForm(form) {
    let valid = true;

    if (!validateField(form.elements.name)) {
        valid = false;
    }

    if (!validateField(form.elements.phone)) {
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