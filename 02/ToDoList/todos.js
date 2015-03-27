//start...
var input = getById("toDoText");
input.addEventListener("keydown", function(e){
	console.log(e.which	);
	if(e.which === 13){
		e.target.value = null;
	}
});