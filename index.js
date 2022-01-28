const barBtnTraSua = document.getElementById("btn-bar-tra-sua")

barBtnTraSua.addEventListener("click", function () {
    barBtnTraSua.innerHTML = "✕"

    const ul = document.createElement("ul")
    
    const aboutUS = document.createElement("li")
    aboutUS.innerHTML = "About US"
    const theDrinks = document.createElement("li")
    theDrinks.innerHTML = "The Drinks"
    const theFoods = document.createElement("li")
    theFoods.innerHTML = "The Foods"
    const gio = document.createElement("li")
    gio.innerHTML = "Giỏ"
    const tinTuc = document.createElement("li")
    tinTuc.innerHTML = "Tin tức"
    const contactUS = document.createElement("li")
    contactUS.innerHTML = "Contact US"

    ul.appendChild(aboutUS)
    ul.appendChild(theDrinks)
    ul.appendChild(theFoods)
    ul.appendChild(gio)
    ul.appendChild(tinTuc)
    ul.appendChild(contactUS)

})
