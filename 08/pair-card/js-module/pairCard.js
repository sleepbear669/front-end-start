(function($,global, app){
    console.log("hello World");

    $("#card_box").click(function(event){
        var $card = $(event.target);
        if($card.hasClass("card") && !$card.hasClass("match")){
            app.clickCard($card);
        }

    });
    app.makeCardDeck();
    app.render();
    console.log(app);

})(jQuery, window, cardContainer);