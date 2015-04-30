/**
 * Created by sleepbear on 2015-04-30.
 */
$(document).ready(function () {
    var pageInfo = {
        searchKey : "",
        page : "",
        currentPageNo : 1,
        totalPage : 0,
        url : function (){
            var url = "https://apis.daum.net/search/"+ this.page
                +"?apikey=d89846fc3b0a4b338321610e85737eb5&q="
                + this.searchKey+"&output=json&pageno="
                + this.currentPageNo +"&callback=?";
            return url;
        }
    };
    var $template = $("#listTemplate");
    function initPageInfo() {
        pageInfo.searchKey = $("form input").val().trim();
        pageInfo.page = "board";
        pageInfo.currentPageNo = 1;
        pageInfo.totalPage = 0;
    }

    function searchData() {
        $.getJSON(pageInfo.url(), function(data){
            var item = data.channel.item;
            var html  = $.tmpl($template, {list : item , type : pageInfo.page});

            $("ul#searchList").html(html);
            console.log(item);
            console.log(html);
        })
    }

    function search() {
        initPageInfo();
        if(pageInfo.searchKey !== ""){
            searchData();
        }else{
            alert("검색어를 지정");
        }
        console.log(pageInfo.searchKey);
    }

    $("form").submit(function () {
        search();
    })
});