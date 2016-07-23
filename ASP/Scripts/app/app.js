angular.module('aspWcfAngular', ['ui.bootstrap', 'ngRoute'])
    .config(AppConfig)
    .run(AppRun);

AppConfig.$inject = ['$routeProvider'];

function AppConfig($routeProvider) {
    $routeProvider
        .when('/', {
            redirectTo: '/users'
        })
        .when('/users', {
            templateUrl: 'users.html',
            controller: 'UsersCtrl',
            controllerAs: 'usersVm'
        })
        .otherwise({
            template: '<h3>No page found</h3>'
        });
}

function AppRun() {

}