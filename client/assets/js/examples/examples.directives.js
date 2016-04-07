var examplesApp = angular.module('examples-directives', []);
examplesApp.directive("ex1", function () {
    'use strict';
    return {restrict: 'E',
        scope: {
            customerInfo: '=info'
        },
           templateUrl: 'directives/examples/ex1.html'
              };
})
.directive("ex2", function () {
    'use strict';
    return {restrict: 'E',
        scope: {
           //  p = pjotr
        },
           templateUrl: 'directives/examples/ex2.html'
              };
})
.directive("friends", function () {
    'use strict';
    return {restrict: 'E',
        scope: {
           //  p = pjotr
        },
           templateUrl: 'directives/examples/friends.html'
              };
})
.directive("friends2", function () {
    'use strict';
    return {restrict: 'E',
        scope: {
           //  p = pjotr
        },
           templateUrl: 'directives/examples/friends2.html'
              };
});
