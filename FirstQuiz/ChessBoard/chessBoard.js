    var mousedown = function(e) {
    	if(e.target.id !== "board"){
    	boardColor = e.target.className;
    	e.target.className = "red";
   		}
    };
    var mouseup = function(e) {
    	if(e.target.id !== "board"){
    	e.target.className = boardColor;
    	}
    };
    
 	var str ="";
 	var template = getInnerHTMLById("boardTemplate");
 	var color;
    for(var i=0; i<4; i++){
        for(var j=0; j<4; j++){
            if((i+j)%2 === 0) color = "white";
            else color = "black";
            str += template.replace("{color}",color);
        }
        str+="<br>";
    }
    innerHTMLById("board",str);

    var board = getById("board");
    var boardColor ='';

    board.addEventListener("mousedown", mousedown);
    board.addEventListener("mouseup", mouseup);