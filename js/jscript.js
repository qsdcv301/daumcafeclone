let i = 0;
let count = 0;
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

    $(".b-table").eq(0).css("display", "flex");
    fadeInOut();
    setInterval(fadeInOut, 9000);

    const bTableCount = $(".b-table").length;
    $(document).on("click", ".run", function () {
        if ($(this).hasClass("btn-next")) {
            if (count > bTableCount - 2) {
                $(this).removeClass("run");
                return;
            } else {
                count++;
                if (count > 0) {
                    $(".btn-prev").addClass("run");
                }
            }
        } else {
            if (count < 1) {
                $(".btn-prev").removeClass("run");
            } else {
                count--;
                if (count < bTableCount - 2) {
                    $(".btn-next").addClass("run");
                }
            }
        }
        $(".b-table").hide();
        $(".b-table").eq(count).css("display", "flex");
    });

    $(".btn-prev.run").click(function (e) {
        e.preventDefault();
        alert("누름");
    });

}); // /.jquery
function fadeOutIn() {
    let ct = $(".hero-box").length;
    $(".hero .hero-box:eq(" + (ct - 1) + ")").clone().prependTo('.hero');
    $(".hero .hero-box:eq(" + ct + ")").remove();
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