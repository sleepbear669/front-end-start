//start...
$(document).ready(function(){
    var todoContent = "";

    var inputTodo = function (selector) {
        todoContent = $(selector).val();
        $(selector).val("");
    };

    var addTodoList = function(content) {
        $.tmpl($("#todoTemplate"), {content : content}).appendTo("ul");
    };
    $("form").submit(function(){
        inputTodo("#todo_input");
        addTodoList(todoContent);
    });
    console.log("Hello Wolrd");
});