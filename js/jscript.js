$(function () {
    $(".grid-fill").hover(function () {
        $(this).find(".subnav").stop().fadeToggle();
    });
}); // /.jquery