const path = "/users/download/index.html"

const isHtml = prosha => {
    const wwn = ".html";
    const slice = prosha.slice(-5);

    return slice == wwn; 

}





console.log(isHtml(path))