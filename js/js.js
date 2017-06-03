
  var skip = document.getElementById('skipbutton');
	var movie = document.getElementById('movie');
	var body = document.getElementById('body');
	var movie = document.getElementById('movie');
	var mainCont = document.getElementById("mainCont");

	



function Pre(){
	body.removeChild(movie);
	mainCont.style.display ='inline';
	
	};



	skip.addEventListener("click", Pre, false);







