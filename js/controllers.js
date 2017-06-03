'use strict';

var ctrl = angular.module('ctrl', []);

ctrl.controller('controllerModel', ['$scope','$http', function($scope, $http){


	$http.get( 'model/Modelki.json').
	success(function(data){
		$scope.models = data;
		console.log($scope.models[1].name);
	} ).error(function(){ 
		console.log('Niestety błąd');
	});


$(document).ready(function(){
    $("div.mod>a")
  .addClass("fancybox")
  
for(var i = 0; i < 15; i++){
	$("." + i + ">a.fancybox")
  .attr("data-fancybox-group","gallery")
   .fancybox({
        padding : 0,
         helpers : {
        title: {
            type: 'inside',
            position: 'top',
        }},});
}
	});
	


	
}]);

ctrl.controller('controllerOffer', ['$scope', function($scope){

	$scope.collapse = function(){
	addEventListener("click", function (ev){
	
	ev.target.nextSibling.style.visibility="visible";
	ev.target.style.display="none";
	console.log(ev.target.nextSibling);
	
},false);
};
	
	
}]);

ctrl.controller('controllerPrj', ['$scope', function($scope){

	$(document).ready(function() {
  setInterval(rotateImages, 4000);
});

function rotateImages(){
  var curPhoto = $("#section1 div.current");
  var nxtPhoto = curPhoto.next();
  
  if(nxtPhoto.length == 0){
    nxtPhoto = $("#section1 div:first"); 
  }
  
  curPhoto.removeClass("current").addClass("previous");
  nxtPhoto.css({opacity: 0.0}).addClass("current").animate({opacity: 1.0}, 1000,
                                                           
  function(){
    curPhoto.removeClass("previous");
  });
}
	
}]);