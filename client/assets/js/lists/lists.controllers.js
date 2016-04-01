angular.module('application')
    .controller('ListsListController', function ($scope, $state, popupService, $window, Lists) {
          $scope.lists = Lists.query(); //fetch all lists. Issues a GET to /api/lists

          $scope.deleteLists = function (lists) { // Delete a lists. Issues a DELETE to /api/lists/:id
            if (popupService.showPopup('Really delete this?')) {
                lists.$delete(function () {
                    $window.location.href = ''; //redirect to home
                });
            }
        };
    })
    .controller('ListsViewController', function ($scope, $stateParams, Lists) {

        $scope.lists = Lists.get({ id: $stateParams.id }); //Get a single lists. Issues a GET to /api/lists/:id
    })
     .controller('ListsCreateController', function ($scope, $state, $stateParams,Lists) {
        $scope.lists = new Lists();  //create new lists instance. Properties will be set via ng-model on UI
		$scope.lists.users_id = user_id;
		$scope.lists.lists_type = $stateParams.type;
        $scope.addLists = function () { //create a new lists. Issues a POST to /api/lists

            $scope.lists.$save(function () {
                $state.go('lists'); // on success go back to home i.e. lists state.
            });
        };
    })
    .controller('ListsEditController', function ($scope, $state, $stateParams, Lists) {

        $scope.updateLists = function () { //Update the edited lists. Issues a PUT to /api/lists/:id
            $scope.lists.$update(function () {
                $state.go('lists'); // on success go back to home i.e. listss state.
            });
        };

        $scope.loadLists = function () { //Issues a GET request to /api/lists	/:id to get a lists to update
            $scope.lists = Lists.get({ id: $stateParams.id });
        };

        $scope.loadLists(); // Load a lists which can be edited on UI
    });
