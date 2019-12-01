/*
* @Author: weiqiang
* @Date: 2019/11/29 16:34
*/
$(function () {
    $(".dd_name").click(function () {
        $(".shouhuo").removeClass("active")
        $(this).parent().addClass("active");
    });
    $(".way").click(function () {
        $(".way").removeClass("dd_active")
        $(this).addClass("dd_active");
    });
    $("#send").click(function () {
       window.location.href = "finish.html"
    });
});