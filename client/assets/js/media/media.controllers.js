angular.module('application.controllers')
.controller('MediaListController', function($scope, $state, popupService, $window, Media) {
  $scope.media = Media.query(); //fetch all media. Issues a GET to /api/media

  $scope.deleteMedia = function(media) { // Delete a media. Issues a DELETE to /api/media/:id
    if (popupService.showPopup('Really delete this?')) {
      media.$delete(function() {
        $window.location.href = ''; //redirect to home
      });
    }
  };
})
.controller('MediaViewController', function($scope, $stateParams, Media) {

  $scope.media = Media.get({ id: $stateParams.id }); //Get a single media. Issues a GET to /api/media/:id
})
.controller('MediaViewAllController', function($scope, $stateParams, Media) {
  $scope.media = Media.query(); //Get multiple media. Issues a GET to /api/media/:id

})
.controller('MediaCreateController', function($scope, $state, $stateParams, Media) {
  $scope.media = new Media();  //create new media instance. Properties will be set via ng-model on UI

  $scope.addMedia = function() { //create a new media. Issues a POST to /api/media
    $scope.media.$save(function() {
      $state.go('media'); // on success go back to home i.e. media state.
    });
  };
})
.controller('MediaEditController', function($scope, $state, $stateParams, Media) {
  $scope.updateMedia = function() { //Update the edited media. Issues a PUT to /api/media/:id
    $scope.media.$update(function() {
      $state.go('media'); // on success go back to home i.e. medias state.
    });
  };

  $scope.loadMedia = function() { //Issues a GET request to /api/media/:id to get a media to update
    $scope.media = Media.get({ id: $stateParams.id });
  };

  $scope.loadMedia(); // Load a media which can be edited on UI
});
