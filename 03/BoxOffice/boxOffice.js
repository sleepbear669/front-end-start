	var boxOfficeListTemplate = getInnerHTMLById("boxOfficeListTemplate");
  	var url = 'http://m.movie.daum.net/data/movie/movie_info/box_office.json?country=KR&startDate=20150101&endDate=20150401&pageSize=10&pageNo=';
	
	getJSON(url, function(boxOfficeList){
		console.log(boxOfficeList);
		var templateResultHTML = tmpl(boxOfficeListTemplate, { list : boxOfficeList.data});
		innerHTMLById("boxOfficeList", templateResultHTML);
	});
