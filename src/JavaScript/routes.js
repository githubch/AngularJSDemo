app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/create',
        {
            templateUrl: 'pages/createAccount.html',
            controller: 'AccountController'
        })
        .when('/account/create', {
            templateUrl:'pages/createAccount.html',
            controller: 'AccountController'
        });
    $routeProvider.otherwise({redirectTo: ''});
}]);