var listsApp = angular.module('lists-directives', []);
listsApp.directive("lists", function() {
  return {
    restrict: "E",
    templateUrl: "directives/lists.html"
  };
})

listsApp.directive("btn-new-lists", function() {
	return {
		restrict: "E",
		templateUrl: "directives/btn-new-lists"
	};
});