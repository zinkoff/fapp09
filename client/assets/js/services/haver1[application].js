angular.module('application').factory('haver', ['$resource',
	function($resource){
    	return $resource('http://mikbook.local:60028/api/haver/', {}, {
      		query: {method:'GET', params:{}, isArray:true}
    		});
  	}]);