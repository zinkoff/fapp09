/*angular.module('application',['ngResource']).factory('haver', '$resource',
	function($resource){
    	return $resource('http://mikbook.local:60014/test/api/lists/', {}, {
      		query: {method:'GET', params:{}, isArray:false}
    		});
  	});*/


angular.module('application').controller('getDataCtrl',getDataCtrl);
getDataCtrl.$inject =  ['$scope','$http', '$stateParams', '$state', '$controller'];

function getDataCtrl($scope, $http, $stateParams, $state, $controller) {
	$scope.status = "øøcøø";
	$scope.getData = function () {
		$scope.status = haver();
	}
}


