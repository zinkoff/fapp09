var visualsApp = angular.module('visuals-directives', []);
visualsApp.directive("visuals", function() {
  return {
    restrict: "E",
    templateUrl: "directives/visuals.html"
  };
})

visualsApp.directive("btn-new-visuals", function() {
	return {
		restrict: "E",
		templateUrl: "directives/btn-new-visuals"
	};
});