angular.module('application.controllers', ['ngAnimate'])

// ex1Controller

	.controller('ex1Controller', function ($scope) {
			$scope.igor = { "name": "Igor1", "address": "123 Somewhere" };
			$scope.naomi = { "name": "Naomi", "address": "123 Somewhere" };
})

// ex2Controller

.controller('ex2Controller', function ($scope) {
			$scope.items = [
  {
    "name": "Igor den grusomme",
    "address": "123 Somewhere"
  },
  {
    "name": "Naomi Bell",
    "address": "123 Somewhere"
  },
  {
    "name": " Bell",
    "address": "555Somewhere"
  }
];
})

// repeatController

.controller('repeatController', function($scope) {
  $scope.friends = [
    {name:'John', age:25, gender:'boy'},
    {name:'Jessie', age:30, gender:'girl'},
    {name:'Johanna', age:28, gender:'girl'},
    {name:'Joy', age:15, gender:'girl'},
    {name:'Mary', age:28, gender:'girl'},
    {name:'Peter', age:95, gender:'boy'},
    {name:'Sebastian', age:50, gender:'boy'},
    {name:'Erika', age:27, gender:'girl'},
    {name:'Patrick', age:40, gender:'boy'},
    {name:'Samantha', age:60, gender:'girl'}
  ];
});

