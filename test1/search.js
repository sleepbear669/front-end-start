(function(){
    var pageInfo = {
        searchKey : "",
        page : "",
        currentPageNo : 1,
        totalPage : 0,
        url : function (){
            var url = "https://apis.daum.net/search/"+ this.page
                +"?apikey=d89846fc3b0a4b338321610e85737eb5&q="
                + this.searchKey+"&output=json&pageno="
                + this.currentPageNo;
            return url;
        }
    }

    var template = $("listTemplate").innerHTML;
    var menuTab = $("menuTab");
    var form = document.querySelectorAll("form")[0];
    var searchList = $("contentsList");
    var addBar = document.querySelector(".adder");
    var loadingImage = $("load-image");
    form.addEventListener("submit", submit);
    addBar.addEventListener("click", addList);
    menuTab.addEventListener("click", changeMenu);

    function submit (event) {
        pageInfo.page = "board";
        pageInfo.currentPageNo = 1;
        pageInfo.totalPage = 1;
        pageInfo.searchKey = event.target.querySelectorAll("input")[0].value.trim();
        addBar.classList.add("hide");

        if (pageInfo.searchKey !== "") {
            changeMenuStatus();
            update();
        } else {
            alert("검색어를 넣어주세요.");
            searchList.innerHTML = null;
            changeMenuStatus();
        }
    }

    function changeMenu (event) {
        if (event.target.id !== "menuTab" && event.target.id !== pageInfo.page) {
            pageInfo.page = event.target.id;
            pageInfo.currentPageNo = 1;
            changeMenuStatus();
            update();
        }
    }

    function addList (event) {
        pageInfo.currentPageNo++;
        update();
        addBarStatus();
    }

    function imageLoadCheck() {
        if(pageInfo.page === "vclip" || pageInfo.page ==="image"){

            var loadedImage = searchList.querySelectorAll("img.hide");

            var intervalNum = setInterval(function(){
                for(var i=0 ; i<loadedImage.length; i++) {
                    if(!loadedImage[i].complete) return;
                }
                for(var i=0 ;i<loadedImage.length; i++) {
                    loadedImage[i].classList.remove("hide");
                }
                clearInterval(intervalNum);
            }, 100);
        }
    }
    function update() {
        loadingImage.classList.remove("hide");
        getJSON(pageInfo.url(), function (data) {
            if(pageInfo.currentPageNo === 1) searchList.innerHTML = null;
            var str = tmpl(template, {list: data.channel.item , type : pageInfo.page});
            pageInfo.totalPage = data.channel["pageCount"];
            addBarStatus();
            searchList.innerHTML += htmlSpecialChars(str, "");
            imageLoadCheck();
            loadingImage.classList.add("hide");
        });
    }

    function addBarStatus(){
        if(pageInfo.currentPageNo < pageInfo.totalPage) addBar.classList.remove("hide");
        else addBar.classList.add("hide");
    }

    function changeMenuStatus() {
        if (menuTab.querySelector(".active") !== null) {
            menuTab.querySelector(".active").className = "";
        }
        if(pageInfo.searchKey !== "")$(pageInfo.page).parentNode.className = "active";
    }

})();