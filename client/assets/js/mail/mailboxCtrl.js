// mailboxCtrl

angular.module('application.controllers')
.controller('mailboxCtrl',mailboxCtrl);
mailboxCtrl.$inject = ['$scope','$http', '$stateParams', '$state', '$controller'];

function mailboxCtrl($scope,$http,$stateParams,$state,$controller){
	 $scope.id = ($state.params.id || '');
}
