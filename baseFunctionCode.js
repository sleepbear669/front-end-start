    function getById(id){ return document.getElementById(id); }
    function getInnerHTMLById (id) { return getById(id).innerHTML; }
    function innerHTMLById(id, str){ getById(id).innerHTML = str;  }   
	function getNChild(element, n){return element.children[n-1];}