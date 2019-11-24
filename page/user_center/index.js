$(function () {

    $("#information").click(function () {
        $(".center_right").css("display","none");
        $(".center_right_1").css("display","block");
        $(".select").removeClass("red");
        $(this).addClass("red");
    });

    $("#place").click(function () {
        $(".center_right").css("display","none");
        $(".center_right_2").css("display","block");
        $(".select").removeClass("red");
        $(this).addClass("red");
    });
    $("#passwd").click(function () {
        $(".center_right").css("display","none");
        $(".center_right_3").css("display","block");
        $(".select").removeClass("red");
        $(this).addClass("red");
    })

});