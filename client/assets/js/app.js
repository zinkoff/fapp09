(function() {
  'use strict';

  angular.module('application', [
    'ui.router',
    'ngAnimate',
		'ngResource',

		//	pushmenu

		//'wxy.components',

		//'wxy.pushmenu',

		//	movieApp
		'application.controllers',
		'application.services',

		//	directives
		'ks-directives',
		'visuals-directives',
		'pw.canvas-painter',
		'examples-directives',
		//'ngImageDimensions',

    //	foundation
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
