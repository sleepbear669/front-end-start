(function($,global, app){
    console.log("hello World");
    $("#start").click(function(){
        app.startGame();
    });
    $("#card_box").click(function(event){
        var $card = $(event.target);
        if($card.hasClass("card") && !$card.hasClass("match")){
            app.clickCard($card);
        }

    });
    app.startGame();
    console.log(app);

})(jQuery, window, cardContainer);