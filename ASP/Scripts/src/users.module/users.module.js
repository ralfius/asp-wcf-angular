import UsersComponent from './components/users/users.component';

const AppUsersModule = angular
    .module('aspWcfAngular.users', [])
    .config(AppConfig)
    .run(AppRun);

AppConfig.$inject = ['$routeProvider'];

function AppConfig($routeProvider) {
    //$routeProvider
    //    .when('/', {
    //        redirectTo: '/users'
    //    })
    //    .when('/users', {
    //        component: 'users'
    //    })
    //    .otherwise({
    //        template: '<h3>No page found</h3>'
    //    });
}

function AppRun() {

}

AppUsersModule    
    .component('users', UsersComponent);

export default AppUsersModule;
