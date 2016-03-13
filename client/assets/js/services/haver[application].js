angular.module('application').factory('haver', ['$resource',
	function($resource){
    	return $resource('http://mikbook.local:60014/test/api/lists/', {}, {
      		query: {method:'GET', params:{}, isArray:true}
    		});
  	}]);