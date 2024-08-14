let i = 0;
let count = 0;
const now = new Date();
const nowMonth = (now.getMonth() + 1 < 10) ? "0" + (now.getMonth() + 1) : now.getMonth() + 1;
const nowDate = (now.getDate() < 10) ? "0" + (now.getDate()) : now.getDate();
const nowHours = (now.getHours() < 10) ? "0" + (now.getHours()) : now.getHours();
const nowMinutes = (now.getMinutes() < 10) ? "0" + (now.getMinutes()) : now.getMinutes();
const nowDay = now.getFullYear() + "." + nowMonth + "." + nowDate + ".";
const nowTime = nowHours + ":" + nowMinutes;

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
                if (count > bTableCount - 2) {
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

    $(".text-date").html(nowDay + "<strong>" + nowTime + "</strong>");

    $.ajax({
        url: "../data/data.json",
        dataType: "json",
        success: function (data) {
            $(".best_ul").html(displayData(data));
            console.log(data);
        },
        error: function (xhr, status, error) {
            console.error("에러가 났습니다.", error);
        }
    });

    // setInterval(cafeSupporters, 5000);
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

function displayData(data) {
    let htmlData = "";
    for (let i = 0; i < data.length; i++) {
        htmlData += `<li>
                        <a href="${data[i].list}">
                            <div class="thumb_list"><img src="../image/${data[i].img}" alt="001"></div>
                            <div class="text_list">
                                <span>${data[i].id}</span>
                                <p class="text_p_list">
                                    ${data[i].title}
                                </p>
                            </div>
                            <div class="writer_list">
                                
                                <span class="writer">${data[i].writer}</span>
                                <span class="comment">${data[i].comment}</span>
                            </div>
                        </a>
                    </li>`;
    }
    return htmlData;
}


// function cafeSupporters() {
//     const cafeSupportersImg = document.querySelectorAll(".notice-img img");
//     cafeSupportersImg.forEach(function (key) {
//         if(key.classList.contains("act")){
//             key.classList.remove("act");
//         }else{
//             key.classList.add("act");
//         }
//     });
// }