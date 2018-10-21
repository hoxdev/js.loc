$(function () {
    var $parag = $('p');
    $parag.on('click', function (event) {
        $(this).animate({
            opacity: 0
        }, 500)
    });
});
