angular.module('application.controllers')
.controller('ItemsListController', function($scope, $state, popupService, $window, Items) {
  $scope.items = Items.query(); //fetch all items. Issues a GET to /api/items

  $scope.deleteItems = function(items) { // Delete a items. Issues a DELETE to /api/items/:id
    if (popupService.showPopup('Really delete this?')) {
      items.$delete(function() {
        $window.location.href = ''; //redirect to home
      });
    }
  };
})
.controller('ItemsViewController', function($scope, $stateParams, Items) {
  $scope.items = Items.get({ id: $stateParams.id }); //Get a single items. Issues a GET to /api/items/:id
})
.controller('ItemsCreateController', function($scope, $state, $stateParams, Items) {
  $scope.items = new Items();  //create new items instance. Properties will be set via ng-model on UI

  $scope.addItems = function() { //create a new items. Issues a POST to /api/items
    $scope.items.$save(function() {
      $state.go('items'); // on success go back to home i.e. items state.
    });
  };
})
.controller('ItemsEditController', function($scope, $state, $stateParams, Items) {
  $scope.updateItems = function() { //Update the edited items. Issues a PUT to /api/items/:id
    $scope.items.$update(function() {
      $state.go('items'); // on success go back to home i.e. itemss state.
    });
  };

  $scope.loadItems = function() { //Issues a GET request to /api/itemss/:id to get a items to update
    $scope.items = Items.get({ id: $stateParams.id });
  };

  $scope.loadItems(); // Load a items which can be edited on UI
});
