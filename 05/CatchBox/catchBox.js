/**
 * Created by sleepbear on 2015-04-23.
 */
<<<<<<< HEAD
$( document ).ready(function() {
    $(".container").height($(window).innerHeight());
    var $box = $("<div>")
        .attr("id", "game_box")
        .height(30)
        .width(30)
        .appendTo("#game_screen");
    console.log($box);
=======
$(document).ready(function(){
    var score = 0;
    var MISS_MAX = 5;
    var missCount = 0;
    $("p#miss").hide();

    var $box = $("<div>")
        .attr("id","catch_me")
        .addClass("red")
        .width(50)
        .height(50)
        .appendTo("#screen");

    $box.click(function () {
        if($(this).hasClass("red")){
            $(this).attr("class","blue");
            score++;
            $("p span#score").html(score);
        }
    });

    function moveBox($screen, $box){
        var width = (Math.random() * ( $screen.width() - $box.width()/2 ) );
        var height = (Math.random() * ( $screen.height() - $box.height()/2 ) ) + $screen.offset().top;
        $box.attr("class","red").offset({ top: height, left: width});
    }

    var $button = $("button#start")
        .click(function(){
            $(this).hide();
            $("p#miss").show();
            $box.show();
            $("p span#max").html(MISS_MAX);
            var $miss = $("p span#count").html(missCount);
            $("p#miss").show();
            var gameInterval= setInterval(function(){
                if ($box.hasClass("red")) {
                    missCount++;
                    $miss.html(missCount);
                }
                if(missCount <= MISS_MAX) {
                    moveBox($("#screen"), $box)
                }else {
                    $box.hide();
                    $("p#miss").hide();
                    $("button#start").show();
                    missCount = 0;
                    score = 0;
                    clearInterval(gameInterval);
                }
            }, 1000);
        })
>>>>>>> origin/master
});

