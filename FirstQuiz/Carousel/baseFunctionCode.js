    function getById(id){ return document.getElementById(id); }
    function getInnerHTMLById (id) { return getById(id).innerHTML; }
    function innerHTMLById(id, str){ getById(id).innerHTML = str;  }