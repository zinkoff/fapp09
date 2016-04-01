/*
http://www.sitepoint.com/creating-crud-app-minutes-angulars-resource/
*/
angular.module('application.services').factory('Lists', function ($resource) {

    //"use strict";

    return $resource(api_server + '/lists/:id', {id: '@_id'}, {

        'update' : { method: 'PUT' },
        'get': { method: 'GET', cache: false},
        'query': { method: 'GET', cache: false, isArray: true }
        /*,
        get()
        query()
        save()
        remove()
        delete()*/

    });
});