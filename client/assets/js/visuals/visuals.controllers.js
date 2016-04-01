angular.module('application')
    .controller('VisualsListController', function ($scope, $state, popupService, $window, Visuals) {
          $scope.visuals = Visuals.query(); //fetch all visuals. Issues a GET to /api/visuals

          $scope.deleteVisuals = function (visuals) { // Delete a visuals. Issues a DELETE to /api/visuals/:id
            if (popupService.showPopup('Really delete this?')) {
                visuals.$delete(function () {
                    $window.location.href = ''; //redirect to home
                });
            }
        };
    })
    .controller('VisualsViewController', function ($scope, $stateParams, Visuals) {

        $scope.visuals = Visuals.get({ id: $stateParams.id }); //Get a single visuals. Issues a GET to /api/visuals/:id
    })
     .controller('VisualsCreateController', function ($scope, $state, $stateParams,Visuals) {
        $scope.visuals = new Visuals();  //create new visuals instance. Properties will be set via ng-model on UI
		$scope.visuals.users_id = user_id;
		$scope.visuals.visuals_type = $stateParams.type;
        $scope.addVisuals = function () { //create a new visuals. Issues a POST to /api/visuals

            $scope.visuals.$save(function () {
                $state.go('visuals'); // on success go back to home i.e. visuals state.
            });
        };
    })
    .controller('VisualsEditController', function ($scope, $state, $stateParams, Visuals) {

        $scope.updateVisuals = function () { //Update the edited visuals. Issues a PUT to /api/visuals/:id
            $scope.visuals.$update(function () {
                $state.go('visuals'); // on success go back to home i.e. visualss state.
            });
        };

        $scope.loadVisuals = function () { //Issues a GET request to /api/visuals	/:id to get a visuals to update
            $scope.visuals = Visuals.get({ id: $stateParams.id });
        };

        $scope.loadVisuals(); // Load a visuals which can be edited on UI
    });
