//start...
$(document).ready(function(){
    var $ul = $("ul");
    $ul.html(localStorage["content"]);
    var todoContent = "";
    var inputTodo = function (selector) {
        todoContent = $(selector).val();
        $(selector).val("");
    };

    var addTodoList = function(content) {
        $.tmpl($("#todoTemplate"), {content : content}).appendTo("ul");
    };

    function deleteContent(element) {
        element.parentNode.remove();
    }

    $ul.click(function(event){
        if(event.target.className === "delete"){
            deleteContent(event.target);
            updateLocalStorage("content", $ul.html());
        }
    });
    $("form").submit(function(){
        inputTodo("#todo_input");
        if(todoContent !== "") {
            addTodoList(todoContent);
            updateLocalStorage("content", $ul.html());
        }
    });
    function updateLocalStorage(key , value){
        localStorage[key] = value;
    }
    console.log("Hello World");
});