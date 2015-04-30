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
    var $searchList = $("ul#searchList");
    var $currentTab = $("ul :first-child").toggleClass("active");
    var $adder = $("#adder").click(function(){
        pageInfo.currentPageNo++;
        searchData();
    });

    var $tab = $("#board_tab").click(function(event){
        changTap();
    });

    $("form").submit(function () {
        search();
    });

    function changTap() {
        var target = $(event.target);
        $currentTab.toggleClass("active");
        $currentTab = target.parent().toggleClass("active");
        $searchList.empty();
        if (target.is("a") && pageInfo.searchKey != "") {
            pageInfo.page = target.attr('id');
            searchData();
        }
    };

    function initPageInfo() {
        pageInfo.searchKey = $("form input").val().trim();
        pageInfo.page = "board";
        pageInfo.currentPageNo = 1;
        pageInfo.totalPage = 0;
    };

    function searchData() {
        $.getJSON(pageInfo.url(), function(data){
            var item = data.channel.item;
            var html  = $.tmpl($template, {list : item , type : pageInfo.page});
            $.each(html, function(i , val){
                if($(val).is("li"))
                    $(val).html(htmlSpecialChars(val.innerHTML,""));
            });
            $searchList.append(html);
        })
    };
    function search() {
        initPageInfo();
        if(pageInfo.searchKey !== ""){
            searchData();
        }else{
            alert("검색어를 지정");
        }
    };


});