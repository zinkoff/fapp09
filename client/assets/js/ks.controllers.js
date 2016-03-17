//	kontrolemneCtrl
angular.module('application').controller('kontrolemneCtrl',kontrolemneCtrl);
kontrolemneCtrl.$inject = ['$scope','$http', '$stateParams', '$state', '$controller'];

function kontrolemneCtrl($scope,$http,$stateParams,$state,$controller){

	$scope.id = ($state.params.id || '');
	$http.get("data/kontrol.json")
    .then(function(response) {
        //First function handles success
        $scope.kontrol = response.data;
    }, function(response) {
        //Second function handles error
        $scope.kontrol = "Something went wrong";
    });
    $scope.getHeight = function() {
    	$scope.h = angular.element(document.querySelector('#mikael'))[0].offsetHeight;
    	$scope.t = angular.element(document.querySelector('#mikael'))[0].offsetTop;
    		$scope.l = angular.element(document.querySelector('#mikael'))[0].offsetLeft;
    	}
    $scope.splitUpdateInfo = function(update) {

	var res = str.update("@");
	return res[0] + ' ' + res[1];
    }
}