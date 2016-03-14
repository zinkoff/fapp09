(function() {
  'use strict';

  angular.module('application', [
    'ui.router',
    'ngAnimate',
	'ngResource',
	//movieApp
	'application.controllers',
	'application.services',
    //foundation
    'foundation',
    'foundation.dynamicRouting',
    'foundation.dynamicRouting.animations'
  ])
    .config(config)
    .run(run)
  ;

  config.$inject = ['$urlRouterProvider', '$locationProvider'];

  function config($urlProvider, $locationProvider) {
    $urlProvider.otherwise('/');

    $locationProvider.html5Mode({
      enabled:false,
      requireBase: false
    });

    $locationProvider.hashPrefix('');
  }

  function run() {
    FastClick.attach(document.body);
  }

})();
// angular.module('movieApp',['ui.router','ngResource','movieApp.controllers','movieApp.services']);
