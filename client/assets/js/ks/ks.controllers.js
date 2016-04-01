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
    	$scope.h = angular.element(document.querySelector('#kontrolImage'))[0].offsetHeight;
    	$scope.t = angular.element(document.querySelector('#kontrolImage'))[0].offsetTop;
    		$scope.l = angular.element(document.querySelector('#kontrolImage'))[0].offsetLeft;
    		$scope.h2 = angular.element(document.querySelector('#kontrolImage2'))[0].offsetHeight;
    	$scope.t2 = angular.element(document.querySelector('#kontrolImage2'))[0].offsetTop;
    		$scope.l2 = angular.element(document.querySelector('#kontrolImage2'))[0].offsetLeft;
    		$scope.h3 = h+19;
    	}
    $scope.splitUpdateInfo = function(update) {

	var res = str.update("@");
	return res[0] + ' ' + res[1];
    }
}



