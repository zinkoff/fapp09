angular.module('application.controllers')
   .controller('CanvasDrawController', function ($scope, $state, popupService,  $window) {
   		  $scope.canvas.foto.text = 'asdf';
          $scope.canvas.bgImg = '/assets/images/flora.jpg';//$stateParams.bgImg; //fetch all canvas. Issues a GET to /api/canvas
    });