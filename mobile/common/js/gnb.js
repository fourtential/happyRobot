$(document).ready(function(){
        $(".menu-opener").click(function () {
            $(".menu-opener, .menu-opener-inner, .menu").toggleClass("active");
            $(".menu-link li").css("display", "block")
        });
    });
