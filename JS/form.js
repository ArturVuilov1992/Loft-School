const form = document.querySelector(".form")

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const fields = [form.elements.name, form.elements.phone, form.elements.comments];
    let isValid = true;
    fields.forEach(el => {
            if 
                (!el.value.length){isValid = false;
                    el.classList.add("error")}
            else {el.classList.remove("error")};
if (isValid){console.log("data is sent")} else {console.log("data is not sent")}
    })
    console.log(isValid)
}
)
