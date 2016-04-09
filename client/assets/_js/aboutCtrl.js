angular.module('application').controller('aboutCtrl', aboutCtrl);

aboutCtrl.$inject = ['$scope', '$stateParams', '$state', '$controller'];

function aboutCtrl($scope, $stateParams, $state, $controller) {
	$scope.greeting = 'hello';
}