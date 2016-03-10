angular.module('application').controller('usingAServiceCtrl',usingAServiceCtrl);
usingAServiceCtrl.$inject = ['$scope','$http','$controller','notify','haver1'];

function usingAServiceCtrl($scope, $http, $controller,notify,haver1){
	$scope.callNotify = function(msg) {
		notify(msg);
	};
	$scope.callHaver = function(skriv) {
		alert(skriv);
	};
}
