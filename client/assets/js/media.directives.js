var mediaApp = angular.module('media-directives', []);
mediaApp.directive("media", function() {
  return {
    restrict: "E",
    templateUrl: "directives/media.html"
  };
})

mediaApp.directive("btn-new-media", function() {
	return {
		restrict: "E",
		templateUrl: "directives/btn-new-media"
	};
});