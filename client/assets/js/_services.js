/**
 * Created by Sandeep on 01/06/14.
 */

angular.module('application.services',[])
.factory('Movie',function($resource){
    return $resource('http://movieapp-sitepointdemos.rhcloud.com/api/movies/:id',{id:'@_id'},{
        'update' : { method: 'PUT' },
        'get': { method:'GET', cache: true},
		'query': { method:'GET', cache: true, isArray:true }/*,
		get()
		query()
		save()
		remove()
		delete()*/
    });
})
.service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
});

/*app.factory('Movie', function($resource) {
return $resource(URL, {id: '@_id'}, {
'get': { method:'GET', cache: true},
'query': { method:'GET', cache: true, isArray:true }
});
});*/