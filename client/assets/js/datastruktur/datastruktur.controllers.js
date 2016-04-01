angular.module('application')
    .controller('DatastrukturListController', function ($scope, $state, popupService, $window, Datastruktur) {
          $scope.datastruktur = Datastruktur.query(); //fetch all datastruktur. Issues a GET to /api/datastruktur

          $scope.deleteDatastruktur = function (datastruktur) { // Delete a datastruktur. Issues a DELETE to /api/datastruktur/:id
            if (popupService.showPopup('Really delete this?')) {
                datastruktur.$delete(function () {
                    $window.location.href = ''; //redirect to home
                });
            }
        };
    })
    .controller('DatastrukturViewController', function ($scope, $stateParams, Datastruktur) {

        $scope.datastruktur = Datastruktur.get({ id: $stateParams.id }); //Get a single datastruktur. Issues a GET to /api/datastruktur/:id
    })
     .controller('DatastrukturCreateController', function ($scope, $state, $stateParams,Datastruktur) {
        $scope.datastruktur = new Datastruktur();  //create new datastruktur instance. Properties will be set via ng-model on UI
		$scope.datastruktur.users_id = user_id;
		$scope.datastruktur.datastruktur_type = $stateParams.type;
        $scope.addDatastruktur = function () { //create a new datastruktur. Issues a POST to /api/datastruktur

            $scope.datastruktur.$save(function () {
                $state.go('datastruktur'); // on success go back to home i.e. datastruktur state.
            });
        };
    })
    .controller('DatastrukturEditController', function ($scope, $state, $stateParams, Datastruktur) {

        $scope.updateDatastruktur = function () { //Update the edited datastruktur. Issues a PUT to /api/datastruktur/:id
            $scope.datastruktur.$update(function () {
                $state.go('datastruktur'); // on success go back to home i.e. datastrukturs state.
            });
        };

        $scope.loadDatastruktur = function () { //Issues a GET request to /api/datastruktur	/:id to get a datastruktur to update
            $scope.datastruktur = Datastruktur.get({ id: $stateParams.id });
        };

        $scope.loadDatastruktur(); // Load a datastruktur which can be edited on UI
    });
