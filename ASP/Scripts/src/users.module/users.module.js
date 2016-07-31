import UsersComponent from './components/users/users.component';
import UserService from './services/UserService';
import EditUserDialogController from './controllers/editUserDialog.controller';

const AppUsersModule = angular
    .module('aspWcfAngular.users', ['ui.router'])
    .config(AppConfig)
    .run(AppRun)
    .component('users', UsersComponent)
    .service('UserService', UserService)
    .controller('EditUserDialogController', EditUserDialogController);

AppConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

function AppConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('users', {
          url: '/users',
          template: '<users></users>'
      });
    $urlRouterProvider.otherwise('/users');
}

function AppRun() {

}

export default AppUsersModule.name;
