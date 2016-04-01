angular.module('application')
    .controller('TypesListController', function ($scope, $state, popupService, $window, Types) {
          $scope.types = Types.query(); //fetch all types. Issues a GET to /api/types

          $scope.deleteTypes = function (types) { // Delete a types. Issues a DELETE to /api/types/:id
            if (popupService.showPopup('Really delete this?')) {
                types.$delete(function () {
                    $window.location.href = ''; //redirect to home
                });
            }
        };
    })
    .controller('TypesViewController', function ($scope, $stateParams, Types) {

        $scope.types = Types.get({ id: $stateParams.id }); //Get a single types. Issues a GET to /api/types/:id
    })
     .controller('TypesCreateController', function ($scope, $state, $stateParams,Types) {
        $scope.types = new Types();  //create new types instance. Properties will be set via ng-model on UI
		$scope.types.user_id = user_id;
		//$scope.types.id = 'new';
        $scope.addTypes = function () { //create a new types. Issues a POST to /api/types

            $scope.types.$save(function () {
                $state.go('types'); // on success go back to home i.e. types state.
            });
        };
    })
    .controller('TypesEditController', function ($scope, $state, $stateParams, Types) {

        $scope.updateTypes = function () { //Update the edited types. Issues a PUT to /api/types/:id
            $scope.types.$update(function () {
                $state.go('types'); // on success go back to home i.e. typess state.
            });
        };

        $scope.loadTypes = function () { //Issues a GET request to /api/types	/:id to get a types to update
            $scope.types = Types.get({ id: $stateParams.id });
        };

        $scope.loadTypes(); // Load a types which can be edited on UI
    });
