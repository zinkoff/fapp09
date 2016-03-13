angular.module('application')
.controller('listerCtrl',listerCtrl);

listerCtrl.$inject = ['$scope','$http', '$stateParams', '$state', '$controller'];

function listerCtrl($scope,$http,$stateParams,$state,$controller){

	//////////////////////////////////////variables////////////////////////////////////////
	var currentID = $stateParams.id;
	$scope.currentID = currentID;
	$scope.test = "";
	$scope.status = "";

	//////////////////////////////////////test button ////////////////////////////////////////
	/* 	svarer til add.js -> ( http://bit.ly/1CghqaX ) 	*/
	$scope.contacts = [];
	$scope.contacts.name = "";
	$scope.contacts.number = "";
	$scope.Add = function() {
		$scope.contacts.push({name: $scope.contactname, number: $scope.contactnumber});
		add_item(currentID);
	}



	$scope.nyHave = function (){$scope.status1 = "Have bliver oprettet";}
	$scope.nyHave1 = function () {

		$scope.status = "Have bliver oprettet";

		/*var request = $http({
    		method: "post",
    		url: api_server + "/haver/new/",
    		data: {
        		item_text: $scope.item_text,
        		user_id: user_id
    		},
    		headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
		});
		//	Check whether the HTTP Request is successful or not.
		request.success(function (data) {
			$scope.status = "Item er nu indsat" + data;
			$state.go('/about/')
			//	viewItems(currentID);
			//	$scope.item_text = "";
		});*/
	}
	//////////////////////////////////////$http////////////////////////////////////////
	//	lists.id, lists.list_name

    function viewLists(){
    	$http.get(api_server + "/api/lists/" )
    	.success(function(response) {$scope.lists = response;});
    	}
    viewLists();

    //	list_by_id.id, list_by_id.name
	function getListName(currentID){
		$scope.test = 'viewList';
		$http.get(api_server + "/api/lists/"+currentID+"/name/" )
    	.success(function(response) {$scope.list_name = response;});
    	$scope.test = $scope.list_name;
	}
	getListName(currentID);
	// users.id, users.name, users.email, users.mobile, users.first_action, users.last_action, users.status_id, users.text
    $http.get(api_server + "/api/users/" )
    .success(function(response) {$scope.users = response;});

	function viewItems(currentID){
	//	list_items.id, list_items.text
		$http.get(api_server + "/api/lists/"+currentID+"/items/" )
		.success(function(response) {
			$scope.list_items = response;
			//if(response=FALSE){$scope.list_items = [{id:'id',text:'text',status_id:'status_id'}];}else{$scope.list_items = response;}
		})
    }
	viewItems(currentID);
	//////////////////////////////////////Add_item////////////////////////////////////////
	$scope.Add_item = function () {

		$scope.Add_item_status = "Item bliver indsat";

		var request = $http({
    		method: "post",
    		url: api_server + "/api/lists/"+currentID+"/item/",
    		data: {
        		item_text: $scope.item_text,
        		user_id: user_id
    		},
    		headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
		});
		/* Check whether the HTTP Request is successful or not. */
		request.success(function (data) {
			$scope.Add_item_status = "Item er nu indsat" + data;
			viewItems(currentID);
			$scope.item_text = "";
		});
	}
	//////////////////////////////////////Add new list with a name////////////////////////////////////////

	$scope.Add_list = function (provider) {

		$scope.status = "opretter ny liste";
		var list_name = $scope.new_list_name;

		var request = $http(
			{
				method: "post",
				url: api_server + "/api/lists/new/",
				data: {list_name: list_name, user_id: user_id},
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
			});

			/* Check whether the HTTP Request is successful or not. */
			request.success(function (data) {
				$scope.status = "Listen er nu indsat" + data;
				viewLists();
				$scope.status = data;
				$state.go('/liste/'+data+'/')

			}
			);

	}
	///////////////////////////////// update list

	//	post keys: user_id, name, status_id  /api/lists/:id/edit/

	$scope.Update_list = function (provider) {

		$scope.status = "Opdaterer liste";

		var request = $http(

		);

	}

	//////////////////////////////////////item on hold////////////////////////////////////////
	$scope.Item_status = function (provider) {

	var dataValue = provider.target.attributes.data.value;
	var textValue = provider.target.attributes.text.value;
	var newStatusValue = provider.target.attributes.newStatusValue.value;
	$scope.test = 'putting';


	var request = $http(
			{
				method: "put",
				url: api_server + "/api/item/"+dataValue+"/edit/",
				data: {status_id: newStatusValue,user_id:user_id,text:textValue},
				headers: { 'Content-Type': 'application/json' }

			}
		);
		// Check whether the HTTP Request is successful or not.
		request.success(function (data) {

			$scope.test = data;
			viewItems(currentID);

		});
	}

	//////////////////////////////////////list on hold////////////////////////////////////////
	$scope.List_status = function (provider) {

	var dataValue = provider.target.attributes.data.value;
	$scope.test = 'putting';


	var request = $http(
			{
				method: "put",
				url: api_server + "/api/lists/"+dataValue+"/2/",
				data: {item_id: dataValue},
				headers: { 'Content-Type': 'application/json' }

			}
		);
		// Check whether the HTTP Request is successful or not.
		request.success(function (data) {

			$scope.test = data;
			viewLists(currentID);

		});
	}

	//////////////////////////////////////delete list////////////////////////////////////////

	$scope.Delete_list = function (provider) {

	var dataValue = provider.target.attributes.data.value;
	$scope.status = 'deleting list';


	var request = $http(
			{
				method: "delete",
				url: api_server + "/api/lists/"+dataValue+"/",
				data: {},
				headers: { 'Content-Type': 'application/json' }

			}
		);
		// Check whether the HTTP Request is successful or not.
		request.success(function (data) {

			$scope.status = 'list has been deleted';
			viewLists();

		});
	}

	/*
	$scope.Item_status = function (provider) {
        var dataValue = provider.target.attributes.data.value;
        console.log('clicked signin ' + provider + " # " + dataValue);
        $scope.test = dataValue;
 	}
	*/


}
