
$(document).ready(function () {
    $('.registratior_custom').fadeIn(200);
    $('.x-close').click(function (e) {
        e.preventDefault();
        $('.registratior_custom').fadeOut(0);
    });
});

function change_displayMid() {
    document.getElementById("sl1").style.display = "none";
}

function change_displayEnd() {
    document.getElementById("registratior_custom").style.display = "none";
}

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


