// burger when clicked addclass display none to avatar


$(document).ready(function(){

    $(".burger").on("click", function(e){
        if($(this).hasClass("active")){
            $(this).removeClass("active");
        }else{
            $(this).addClass("active");
        };
        if($(".navigation").hasClass("active")){
            $(".navigation").removeClass("active");
        }else{
            $(".navigation").addClass("active")
        }
        if($(".avatar").hasClass("display-none")){
            $(".avatar").removeClass("display-none");
        }else{
            $(".avatar").addClass("display-none");
        }
    })
    // $(".navigation").on("click", function(e){
    //     $(this).addClass("active");
    // })
})