import UsersComponent from './components/users/users.component';
import UserService from './services/userService';

const AppUsersModule = angular
    .module('aspWcfAngular.users', ['ui.router'])
    .config(AppConfig)
    .run(AppRun);

AppConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

function AppConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('users', {
          url: '/users',
          component: 'users'
      });
    $urlRouterProvider.otherwise('/users');
}

function AppRun() {

}

AppUsersModule    
    .component('users', UsersComponent)
    .factory('userService', UserService);

export default AppUsersModule.name;
