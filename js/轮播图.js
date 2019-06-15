
<script src="./jquery/jquery-3.3.1.min.js"></script>


$(document).ready(function () {
        var items = $("#span").children();
        var len = items.length;
        var index = $("#span").index();
        var index2 = $(".pagination").index();
        var timer;
        var num = $(".pagination").find("span");
        var number = $("#span").find("img");
        num.on("mouseover", function () {

            $(this).addClass("active").siblings("span").removeClass("active");
            var a = $(this).index();
            $(number).eq(a).fadeIn().siblings().fadeOut();

        })
        timer = setInterval(function () {
            index++;
            index2++;
            if (index > len - 1 && index2 > len - 1) { index = 0, index2 = 0 };
            $(number).eq(index).fadeIn().siblings().fadeOut();
            $(num).eq(index2).addClass("active").siblings().removeClass("active");
        }, 3000)



    });
