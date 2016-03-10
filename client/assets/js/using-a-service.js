angular.module('application').controller('usingAServiceCtrl',usingAServiceCtrl);
usingAServiceCtrl.$inject = ['$scope','$http','$controller','notify','alert'];

function usingAServiceCtrl($scope, $http, $controller,notify,haver1){
	$scope.callNotify = function(msg) {
		notify(msg);
	};
	$scope.callAlert = function(skriv) {
		alert(skriv);
	};
}
