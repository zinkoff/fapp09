angular.module('application')

.factory('notify', ['$window', function(win) {

   var msgs = [];
   return function(msg) {
     msgs.push(msg);
     if (msgs.length == 5) {
       win.alert(msgs.join("\n"));
       msgs = [];
       $scope.status = msg;
     }
   };
 }])

.factory('haver', ['$resource',
	function($resource){
    	return $resource('http://mikbook.local:60028/api/haver/', {}, {
      		query: {method:'GET', params:{}, isArray:true}
    		});
  	}])

.factory('haver1', ['$window', function(win) {

   var skriv = [];
   return function(skriv) {
    	alert(skriv);
   };

 }]);