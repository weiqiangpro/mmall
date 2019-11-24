$(function () {
    $(".plus").click(function () {
        // var money = parseInt($(this).parent().parent().children('.t-price').text());
        var money = parseFloat($(this).parent().parent().children('.t-price').text().slice(1));
        console.log(typeof money);
        var $count = $(this).parent().children(".count");
        var n = parseInt($($count).val());
        $($count).val(n + 1);
        var sum =((n + 1) * money);
            if((sum.toString()).indexOf(".")===-1)
                sum=sum+".00";
        $(this).parent().parent().children('.t-sum').text("￥" +sum );
    });
    $(".minus").click(function () {
        var money = parseFloat($(this).parent().parent().children('.t-price').text().slice(1));
        var $count = $(this).parent().children('.count');
        var n = parseInt($($count).val());
        if (n !== 0) {
            var sum =((n -1) * money);
            if((sum.toString()).indexOf(".")===-1)
                sum=sum+".00";
            $($count).val(n - 1);
            $(this).parent().parent().children('.t-sum').text("￥" + sum);
        }
    });


});