    var Time = {
    "lastClickTime" : new Date().getTime(),
    currentTime : function(){ return new Date().getTime();},
    checkTime : function(){ this.lastClickTime = currentTime();},
    isPass : function(second){ 
    	if(this.currentTime() - this.lastClickTime >  second){
    		return true;
    	}else return false;
    }
    };
    function getById(id){ return document.getElementById(id); }
    function getInnerHTMLById (id) { return getById(id).innerHTML; }
    function innerHTMLById(id, str){ getById(id).innerHTML = str;  }   
	function getNChild(element, n){return element.children[n-1];}
	function currentTime(){ return new Date().getTime(); }