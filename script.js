function randID(){
    return Math.floor(Math.random() * (1300000 - 1000000 + 1)) + 1000000;
}

function randTitle(){
	$.ajax({
		type: 'GET',
		url: "http://www.omdbapi.com/?i=tt" + randID(),
		data: { get_param: 'value' },
		dataType: 'json',
		success: function(data){
			if (!(data.Type == "movie" && data.Country == "USA" && data.Genre != "Adult")){
				randTitle();
			}
			else{
				count2++;
				$('#' + count2).html(data.Title);
			}
		}
	});
}
	
/* Main Function */

$(function(){

	var count = 0;

	count2 = 0;

	for (var i=0; i<10; i++){
		count++;
		$('#movies').append('<h1 class="mtitle" id="' + count + '">Loading...</h1>');
		randTitle();
	}
		
	/* Scroll to bottom of page */
	$(window).scroll(function(){
		if($(window).scrollTop() + $(window).height() == $(document).height()){
			for (var i=0; i<10; i++){
				count++;
				$('#movies').append('<h1 class="mtitle" id="' + count + '">Loading...</h1>');
				randTitle();
			}
		}
	});

});
