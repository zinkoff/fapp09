var app = angular.module('media-directives', []);
app.directive("media", function() {
  return {
    restrict: "E",
    templateUrl: "directives/media.html"
  };
})

app.directive("btnnewmedia", function() {
	return {
		restrict: "E",
		templateUrl: "directives/btn-new-media.html"
	};
});

