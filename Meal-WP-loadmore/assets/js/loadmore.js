;(function ($) {
    $(document).ready(function () {
        //alert("test data");

        $("#loadmore").on("click",function(e){ // stop propagation
            //alert("test data");
            var nexturl = $(this).attr('href');
            $.get(nexturl,{},function(data){
                //console.log(data);

                var posts = $(data).find("#posts-container").html();
                // console.log(posts);

                $("#posts-container").append(posts);

                // ajax thake jeta load hoice setar thake amra loadmore k khuje ber kori and setar attr k ber kore ani
                var newpagelink = $(data).find("#loadmore").attr("href");
                console.log(newpagelink);
                if(newpagelink){
                    $("#loadmore").attr("href",newpagelink);
                }else{
                    $("#loadmore").hide('slow');
                }
                


            });

            return false;
        });

        var newpagelink = $("#loadmore").attr("href");

            if(!newpagelink){
                $("#loadmore").hide();
            }
    });
})(jQuery);