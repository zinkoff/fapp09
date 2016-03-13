angular.module('application').factory('makeAlert', ['$window', function(win) {

   var skriv = [];
   return function(skriv) {
    	alert("# " + skriv + " #");
   };

 }]);