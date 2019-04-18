let dom = document.querySelector("#fav__list");
let container = document.querySelector("#fav__list")

let btn = document.getElementById("saveFav")
btn.addEventListener("click", ()=> {
    let stuf = document.querySelector("#fav-stuf").value;
    let places = document.querySelector("#fav-place").value

    container.innerHTML += `
   <h4> I can purchase ${stuf} at ${places} </h4>`
})




