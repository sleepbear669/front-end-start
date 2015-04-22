var submit = getById("submit");
var searchKey = getById("searchKey");
var searchList = getById("searchList");
var template = getInnerHTMLById("searchListTemplate");
var add = getById("add");
var pageno = 1;
var src;

submit.addEventListener("click", function(event){
	src = urlForm(searchKey.value);
	getJSON(src, function(data) {
		searchList.innerHTML = tmpl(template, {list : data.channel});
	});
	searchKey.value = '';
});

add.addEventListener("click", function(event) {
	pageno += 1;
	getJSON(src + pageno, function(data) {
	searchList.innerHTML += tmpl(template, {list : data.channel});
	});
})

function urlForm(searchKey){
	 var src = "https://apis.daum.net/search/web?apikey=d89846fc3b0a4b338321610e85737eb5&q="+ searchKey+"&output=json&pageno=";
	 return src;
}