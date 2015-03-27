var toDoList = getById("toDoList");
var template = getInnerHTMLById("toDoListTemplate");
var listCount = localStorage.length;
var contenList;

var checkList = function(e) {
	if(e.target.className === "toggle-checked"){
		if(e.target.parentNode.className === "blue"){
			e.target.parentNode.className = "";
		}else{
			e.target.parentNode.className = "blue";
		}
		
	}
};
var deleteList =  function(e) {
	if(e.target.className === "delete"){
			e.target.parentNode.remove();
	}
};


var addTodoList = function(e){
	if(e.which === 13 && e.target.value !== ""){
		toDoList.innerHTML += template.replace("{content}",e.target.value);
		e.target.value = null;
	}
};


getById("toDoText").addEventListener("keydown", addTodoList);
toDoList.addEventListener("click", deleteList);
toDoList.addEventListener("click", checkList);
