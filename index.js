const barBtnTraSua = document.getElementById("btn-bar-tra-sua")

const listBarTraSua = document.getElementById("list-bar-tra-sua")

    barBtnTraSua.addEventListener("click", function () {
     
        barBtnTraSua.innerHTML = "✕"
        const aboutUS = document.createElement("span")
        aboutUS.innerHTML = "About US"
        const theDrinks = document.createElement("span")
        theDrinks.innerHTML = "The Drinks"
        const theFoods = document.createElement("span")
        theFoods.innerHTML = "The Foods"
        const gio = document.createElement("span")
        gio.innerHTML = "Giỏ"
        const tuyenDung = document.createElement("span")
        tuyenDung.innerHTML = "Tuyển dụng"
        const contactUS = document.createElement("span")
        contactUS.innerHTML = "Contact US"

        listBarTraSua.appendChild(aboutUS)
        listBarTraSua.appendChild(theDrinks)
        listBarTraSua.appendChild(theFoods)
        listBarTraSua.appendChild(gio)
        listBarTraSua.appendChild(tuyenDung)
        listBarTraSua.appendChild(contactUS)
        
        barBtnTraSua.addEventListener("click", function () {
            barBtnTraSua.innerHTML = "☰"
            listBarTraSua.innerHTML=""
            
        })
    })


    jQuery(document).ready(function () {
        jQuery("#iconChat").click(function () {
            jQuery('#option').toggle();
        });
        jQuery("#iconChat").click(function (e) {
            e.stopPropagation();
        });
     
        jQuery(document).click(function () {
            jQuery("#option").hide();
        });
    });