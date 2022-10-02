if($.cookie("disappear") != "ok"){
    $(".popup").removeClass("ok");
} else {
    $(".popup").addClass("ok");
}

$(".popup-no").on('click',function(){
    $.cookie("disappear", "ok", { expires: 30, path: "/" });
	$(".popup").addClass("ok");
});

$(".popup-yes").on('click',function(){
    window.location.href = "/text.html";
});