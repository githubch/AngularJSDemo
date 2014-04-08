app.controller("AccountController", ['$scope', '$http', '$location', '$q' , function($scope, $http, $location, $q){
    $http.get("data/countries.json").success(function(countries){
        $scope.countries = countries;
        $scope.country = countries[0];
    });
    var sort = function(countries){
    }
    $scope.goTo = function(path){
        $location.path(path);
    }
}]);
