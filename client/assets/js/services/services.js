angular.module('application').factory('haver1', ['$window', function(win) {

   var skriv = [];
   return function(skriv) {
    	alert(skriv);
   };

 }]);