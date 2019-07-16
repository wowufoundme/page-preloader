$(window).ready(function () {
    $(".__loader_content").delay(500).fadeTo("slow", 1, function () {
        $(".__loader_content").html("Loading HTML...");
    });
    $(".__loader_content").delay(500).fadeTo("slow", 1, function () {
        $(".__loader_content").html("Loading BODY...");
    });
    $(".__loader_content").delay(500).fadeTo("slow", 1, function () {
        $(".__loader_content").html("Loading NAVIGATION...");
    });
    $(".__loader_content").delay(500).fadeTo("slow", 1, function () {
        $(".__loader_content").html("Loading TRANSITIONS...");
    });
    $(".__loader_content").delay(500).fadeTo("slow", 1, function () {
        $(".__loader_content").html("LOADING COMPLETE...");
    });
    $(".__loader_wrap").delay(6000).fadeTo("slow", 1, function () {
        $(".__loader_wrap").css("transform", "scale(0)");
        $('.marker-top').css("transform", "translate3d(0,0,0)");
        $('.marker-bottom').css("transform", "translate3d(0,0,0)");
    });
});