angular.module('application').factory('alert', ['$window', function(win) {

   var skriv = [];
   return function(skriv) {
    	alert(skriv);
   };

 }]);