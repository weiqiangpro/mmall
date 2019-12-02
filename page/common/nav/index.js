/*
* @Author: weiqiang
* @Date: 2019/11/23 14:44
*/
$(function () {
    click();
});







var test_alert;
function alert_(mes) {
    clearTimeout(test_alert);
    $(".alert_").remove();
    $("body").prepend("<div class=\"modal-dialog alert_\">\n" +
        "    <div class=\"modal-content\">\n" +
        "        <div class=\"modal-body\">\n" +
        "                  <img src=\"../image/icon/logo.png\" alt=\"\">" +
        "            <span>"+mes+"</span>" +
        "        </div>\n" +
        "    </div>\n" +
        "</div>");
    test_alert = setTimeout(function () {
        $(".alert_").remove();
    }, 1000);
}

function click() {
    $("#user_login").click(function () {
        // alert_("登陆成功")
        $('#myModal').modal('toggle');
    });
    $("#user_register").click(function () {

        $('#myRegister').modal('toggle');
    });
    $(".register_username").blur(function () {
        console.log("aaa");
        console.log($(this).val());
        if (!$(this).val())
            $(".error_username").css("display", "block");
        else
            $(".error_username").css("display", "none");
    });
    $(".register_password").blur(function () {
        if ($(this).val() === "")
            $(".error_password").css("display", "block");
        else
            $(".error_password").css("display", "none");
    });
    $(".register_confirm").blur(function () {
        if ($(this).val() === "")
            $(".error_confirm").css("display", "block");
        else
            $(".error_confirm").css("display", "none");
    });
    $(".register_phone").blur(function () {
        if ($(this).val() === "")
            $(".error_phone").css("display", "block");
        else
            $(".error_phone").css("display", "none");
    });
    $(".register_email").blur(function () {
        if ($(this).val() === "")
            $(".error_email").css("display", "block");
        else
            $(".error_email").css("display", "none");
    });
    $(".register_question").blur(function () {
        if ($(this).val() === "")
            $(".error_question").css("display", "block");
        else
            $(".error_question").css("display", "none");
    });
    $(".register_answer").blur(function () {
        if ($(this).val() === "")
            $(".error_answer").css("display", "block");
        else
            $(".error_answer").css("display", "none");
    });
}