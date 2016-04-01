/*
http://www.sitepoint.com/creating-crud-app-minutes-angulars-resource/
*/
angular.module('application.services').factory('Types', function ($resource) {

    //"use strict";

    return $resource(api_server + '/types/:id', {id: '@_id'}, {

       /* 'update' : { method: 'PUT' },
        'get'    : {method: 'GET'},
        'save'   : {method: 'POST'},
        'query'  : {method: 'GET', isArray: true},
        'remove' : {method: 'DELETE'},
        'delete' : {method: 'DELETE'}*/

        'update' : { method: 'PUT' },
        'get': { method:'GET', cache: true},
		'query': { method:'GET', cache: true, isArray:true }
		/*,
        'save': {method: 'POST'},
        'modify': {method: 'PATCH'},
        get()
        query()
        save()
        remove()*/
    });
});