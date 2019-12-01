/*
* @Author: weiqiang
* @Date: 2019/11/1 11:37
*/
$(function () {

    $("#plus").click(() => {
        $count = $("#count");
        var n = parseInt($($count).val());
        $($count).val(n + 1);
    });
    $("#minus").click(() => {
        $count = $("#count");
        var n = parseInt($($count).val());
        if (n !== 0)
            $($count).val(n - 1);
    });
    $(".p-img-list").on('mouseover','.p-img',function(e) {
            var src = $(this)[0].src;
            $(".main-img").attr("src",src);
    });

    $("#addCart").click(function () {
    //   发送加入购物车请求
        window.location.href = "cart.html"
    })
});