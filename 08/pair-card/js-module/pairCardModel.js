/**
 * Created by sleepbear on 2015-05-17.
 */
var card = {
    class : null,
    matched : false
};

var cardContainer = {
    row : 4,
    column : 4,
    totalCard : function(){
      return this.row * this.column;
    },
        cardDeck : [],
    cardColor : []
}

var cardColor = function(){
    var color = ["green", "gray", "red", "blue", "violet", "gold", "brown", "skyblue"];
    return color.sort(function(){ return 0.5 - Math.random()})
}