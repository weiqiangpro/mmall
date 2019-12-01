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
    });
    $(".edit").click(function () {
        $("#myModalLabel").text("编辑收货地址");
        var $input = $(".edit_place input");
        $($input).val("");
        $('#myModal').modal('toggle');
     var $span = $(this).parent().parent().children("li");
        for (i = 0 ; i<7;i++ ){
            $($input).eq(i).val($($span).eq(i).children("span").text())
        }
    });
    $("#add").click(function () {
        $("#myModalLabel").text("新增收货地址");
        $(".edit_place input").val("");
        $('#myModal').modal('toggle');
    })

});