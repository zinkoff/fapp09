angular.module('application.services').factory('Visuals', function ($resource) {

    //"use strict";

    return $resource(api_server + '/visuals/:id', {id: '@_id'}, {

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