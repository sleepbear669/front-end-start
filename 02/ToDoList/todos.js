var toDoList = getById("toDoList");
var template = getInnerHTMLById("toDoListTemplate");

var deleteList =  function(e) {
	if(e.target.className === "delete" || e.target.className === "toggle-checked"){
			e.target.parentNode.remove();
	}
};
var addTodoList = function(e){
	if(e.which === 13){
		toDoList.innerHTML += template.replace("{content}",e.target.value);
		e.target.value = null;
	}
}

getById("toDoText").addEventListener("keydown", addTodoList);
toDoList.addEventListener("click", deleteList);