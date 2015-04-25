/**
 * Created by sleepbear on 2015-04-23.
 */
$(document).ready(function(){
    var score = 0;
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
            setInterval(function(){
                moveBox($("#screen"), $box)
            }, 1000);
        })
});

