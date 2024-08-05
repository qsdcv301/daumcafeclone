let i = 0;
$(function () {
    $(".grid-fill").hover(function () {
        $(this).find(".subnav").stop().fadeToggle();
    });
    $(".hero-box a").hover(function () {
        $(".hero-box a").removeClass("active");
        $(this).addClass("active");
    });

    $(".btn-left").click(function () {
        fadeOutIn();
    });

    $(".btn-right").click(function () {
        fadeInOut();
    });

    setInterval(fadeInOut, 9000);

}); // /.jquery
function fadeOutIn(){
    let ct = $(".hero-box").length;
    $(".hero .hero-box:eq("+(ct-1)+")").clone().prependTo('.hero');
    $(".hero .hero-box:eq("+ct+")").remove();
    $(".hero .hero-box").removeClass("act");
    $('.hero .hero-box:eq(0)').addClass('act');
    $('.hero .hero-box:eq(0) ul>li:first-child a').addClass("active");
}

function fadeInOut() {
    $(".hero .hero-box:eq(0)").clone().appendTo('.hero');
    $(".hero .hero-box:eq(0)").remove();
    $('.hero .hero-box:eq(0)').addClass('act');
    $('.hero .hero-box:eq(0) ul>li:first-child a').addClass("active");
}