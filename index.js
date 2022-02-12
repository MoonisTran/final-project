

   
$(document).ready(function () {
    $('.registratior_custom').fadeIn(200);
    $('.x-close').click(function (e) {
        e.preventDefault();
        $('.registratior_custom').fadeOut(0);
    });
});