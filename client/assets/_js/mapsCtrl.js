angular.module('application')
.controller('mapsCtrl',mapsCtrl);

mapsCtrl.$inject = ['$scope','$http', '$stateParams', '$state', '$controller'];

function mapsCtrl($scope,$http,$stateParams,$state,$controller){

$scope.status = "";


$scope.map = { center: { latitude: 55.642242, longitude: 12.607934 }, zoom: 14 };


    $scope.options = {scrollwheel: false};
    $scope.coordsUpdates = 0;
    $scope.dynamicMoveCtr = 0;

	// -------------------------------------------------- //
	//	hent haver
	// -------------------------------------------------- //

	$scope.haver = [{"id" : "u2a7umu6", "lat" : "55.6817886", "lng" : "12.5375058"},{"id" : "vy2yde5a", "lat" : "55.6819664", "lng" : "12.58084"},{"id" : "ara8yvug", "lat" : "55.642242", "lng" : "12.607934"},{"id" : "va4ydesa", "lat" : "57.053683", "lng" : "9.9097679"},{"id" : "te4u9a8u", "lat" : "57.4567788", "lng" : "9.9957635"},{"id" : "4y9uheze", "lat" : "55.6956115", "lng" : "12.5593318"},{"id" : "amaby7en", "lat" : "55.6986658", "lng" : "12.5807315"},{"id" : "ne5y8u3e", "lat" : "54.9359937", "lng" : "10.7083529"},{"id" : "a6upe5y5", "lat" : "55.649311", "lng" : "12.6111698"},{"id" : "a", "lat" : "55.642242", "lng" : "12.607934"},{"id" : "b", "lat" : "57.035842", "lng" : "9.9513459"}];
	var antal_haver = $scope.haver.length;

	// -------------------------------------------------- //
	//	beregn gennemsnitskoordinater
	// -------------------------------------------------- //

/*
	var lat_sum = 0;
	var lng_sum = 0;
	for (var i = 0; i < antal_haver; i++) {
		lat_sum += parseInt($scope.haver[i].lat,10);
		lng_sum += parseInt($scope.haver[i].lng,10);
	}
	lat_avg = lat_sum/antal_haver;
	lng_avg = lng_sum/antal_haver;
	$scope.status+=' lat: ' + lat_avg;
	$scope.status+=' ';
	$scope.status+=' lng: ' + lng_avg;
*/



	$scope.map = {
		center: {
		//latitude: 40.1451,
		//longitude: -99.6680
		latitude: 55.67317520000001 ,
		longitude: 12.583894172727275
		//latitude: lat_avg,
		//longitude: lng_avg
    	},
     	zoom: 11,
      	bounds: {}
    };

    $scope.options = {
      scrollwheel: false
    };

    // -------------------------------------------------- //
	//	create array randomMarkers
	// -------------------------------------------------- //

    var createRandomMarker = function(i, bounds, idKey) {

		if (idKey == null) {
        	idKey = "id";
      	}

		var ret = {
			latitude: $scope.haver[i].lat,
			longitude: $scope.haver[i].lng,
			title: 'm' + i
		};

		ret[idKey] = i;
		return ret;
    };

    $scope.randomMarkers = [];
    // Get the bounds from the map once it's loaded
    $scope.$watch(function() {
      return $scope.map.bounds;
    }, function(nv, ov) {
      // Only need to regenerate once
      if (!ov.southwest && nv.southwest) {
        var markers = [];
        for (var i = 0; i < 10; i++) {
          markers.push(createRandomMarker(i, $scope.map.bounds))
        }
        $scope.randomMarkers = markers;
      }
    }, true);

}