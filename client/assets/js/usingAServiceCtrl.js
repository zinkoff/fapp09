angular.module('application').controller('usingAServiceCtrl',usingAServiceCtrl);
usingAServiceCtrl.$inject = ['$scope','$http','$controller','notify','makeAlert'];

function usingAServiceCtrl($scope, $http, $controller,notify,makeAlert){
	$scope.callNotify = function(msg) {
		notify(msg);
	};
	$scope.callMakeAlert = function(skriv) {
		makeAlert('@'+skriv);
	};
}
