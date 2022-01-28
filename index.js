const barBtnTraSua = document.getElementById("btn-bar-tra-sua")
const listBarTraSua=document.getElementById("list-bar-tra-sua")

barBtnTraSua.addEventListener("click", function () {

    barBtnTraSua.innerHTML = "✕"
    
    const aboutUS = document.createElement("div")
    aboutUS.innerHTML = "About US"
    const theDrinks = document.createElement("div")
    theDrinks.innerHTML = "The Drinks"
    const theFoods = document.createElement("div")
    theFoods.innerHTML = "The Foods"
    const gio = document.createElement("div")
    gio.innerHTML = "Giỏ"
    const tinTuc = document.createElement("div")
    tinTuc.innerHTML = "Tin tức"
    const contactUS = document.createElement("div")
    contactUS.innerHTML = "Contact US"

    listBarTraSua.appendChild(aboutUS)
    listBarTraSua.appendChild(theDrinks)
    listBarTraSua.appendChild(theFoods)
    listBarTraSua.appendChild(gio)
    listBarTraSua.appendChild(tinTuc)
    listBarTraSua.appendChild(contactUS)

})
