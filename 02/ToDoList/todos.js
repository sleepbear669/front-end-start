var toDoList = getById("toDoList");
var template = getInnerHTMLById("toDoListTemplate");
var input = getById("toDoText");

var addTodoList = function(e){
	if(e.which === 13){
		toDoList.innerHTML += template.replace("{content}",e.target.value);
		e.target.value = null;
	}
}

input.addEventListener("keydown", addTodoList);