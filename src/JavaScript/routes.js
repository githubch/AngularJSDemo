app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/create',
        {
            templateUrl: 'pages/createAccount.html',
            controller: 'AccountController'
        })
        .when('/account/create', {
            templateUrl:'pages/createAccount.html',
            controller: 'AccountController'
        })
        .when('/home', {
            templateUrl:'pages/magic.html',
            controller:'HomeController'
        });
    $routeProvider.otherwise({redirectTo: ''});
}]);