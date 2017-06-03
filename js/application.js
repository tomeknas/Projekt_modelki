'use strict';

var application = angular.module( 'application' , ['ngRoute', 'ctrl'] );

application.config([ '$routeProvider' , '$httpProvider', function( $routeProvider, $httpProvider, ){

	
	
	$routeProvider.when('/Index', {
		
		templateUrl: 'Projekt_rozwojowy.html'
	});

	$routeProvider.when('/Projekt_rozwojowy', {
		controller:'controllerPrj',
		templateUrl: 'Projekt_rozwojowy.html'
	});

	$routeProvider.when('/Modelki', {
		controller: 'controllerModel',
		templateUrl: 'Modelki.html'
	});
	$routeProvider.when('/Oferta', {
		controller: 'controllerOffer',
		templateUrl: 'Oferta.html'
	});
	$routeProvider.when('/Eventy', {
		
		templateUrl: 'Eventy.html'
	});
	$routeProvider.when('/Dolacz_do_nas', {
		
		templateUrl: 'Dolacz.html'
	});
	

	
	//==============default=============
	$routeProvider.otherwise( {
			redirectTo: '/Projekt_rozwojowy'
	});


}])


