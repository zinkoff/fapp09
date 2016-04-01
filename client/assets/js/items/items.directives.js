var itemsApp = angular.module('items-directives', []);
itemsApp.directive("items", function() {
  return {
    restrict: "E",
    templateUrl: "directives/items.html"
  };
})

itemsApp.directive("btn-new-items", function() {
	return {
		restrict: "E",
		templateUrl: "directives/btn-new-items"
	};
});