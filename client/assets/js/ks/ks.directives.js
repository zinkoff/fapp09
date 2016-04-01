var app = angular.module('ks-directives', []);

app.directive("foto", function() {
  return {
    restrict: "E",
    templateUrl: "directives/foto.html"
  };
});

app.directive("drawoncanvas", function() {
  return {
    restrict: "E",
    templateUrl: "directives/drawOnCanvas.html"
  };
});




/*app.directive("getProp", ['$http', '$filter', function($http, $filter) {
    return {
      template: "{{property}}",
      scope: {
        prop: "=",
        url: "="
      },
      link: function(scope, element, attrs) {
        // Use Aerobatic's caching if we're on that server
        var urlApi = scope.url,
          queryParams = {
            cache: true
          };

        if (window.location.hostname.match('aerobaticapp')) {
          queryParams = {
            params: {
              url: urlApi,
              cache: 1,
              ttl: 30000 // cache for 500 minutes
            }
          };
          urlApi = '/proxy';
        }

        var capitalize = $filter('capitalize');
        $http.get(urlApi, queryParams).then(function(result) {
          scope.property = capitalize(result.data[scope.prop]);
        }, function(err) {
          scope.property = "Unknown";
        });
      }
    };
  }]);*/


/*
app.directive("reviews", function() {
  return {
    restrict: "E",
    templateUrl: "reviews.html"
  };
});

app.directive("specs", function() {
  return {
    restrict: "E",
    templateUrl: "specs.html"
  };
});

app.directive("productTabs", function() {
  return {
    restrict: "E",

    templateUrl: "product-tabs.html",
    controller: function() {
      this.tab = 1;

      this.isSet = function(checkTab) {
        return this.tab === checkTab;
      };

      this.setTab = function(activeTab) {
        this.tab = activeTab;
      };
    },
    controllerAs: "tab"
  };
});
*/