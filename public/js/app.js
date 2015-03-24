var sudoku = angular.module('sudoku', [
    // support for routing.
    'ngRoute'
]);

// defining routing
sudoku.config(['$routeProvider', 
    function($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: 'partials/home.html',
            controller: 'HomeCtrl'
        }).
        // game Page.
        when('/game', {
            templateUrl: 'partials/game.html',
            controller: 'GameBuildCtrl'
        }).
        // handelling InValid URL.
        otherwise({
            template: '<h2>*Page not found</h2>',
            controller: 'ErrorCtrl'
        });
    }
]);
