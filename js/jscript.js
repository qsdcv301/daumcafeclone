$(".grid-fill").hover(function () {
    $(this).find(".subnav").stop().fadeToggle();
});
$(".hero-box a").hover(function () {
    $(".hero-box a").removeClass("active");
    $(this).addClass("active");
}
);