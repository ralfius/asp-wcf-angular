import UsersComponent from './components/users/users.component';
import UserDetailsComponent from './components/userDetails/userDetails.component';
import UserService from './services/UserService';
import EditUserDialogController from './controllers/editUserDialog.controller';
import AngularUiRouter from '../../lib/angular-ui-router';

console.log(AngularUiRouter);

const AppUsersModule = angular
    .module('aspWcfAngular.users', [AngularUiRouter])
    .config(AppConfig)
    .run(AppRun)

    .component('userDetails', UserDetailsComponent)
    .component('users', UsersComponent)

    .service('UserService', UserService)
    .controller('EditUserDialogController', EditUserDialogController);

AppConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

function AppConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('users', {
            // for stable angular-ui-router versions
            //template: '<users></users>',
            url: '/users',

            // this is working with angular-ui-router beta
            component: 'users'
        });
    $urlRouterProvider.when('', '/users');
}

function AppRun() {

}

export default AppUsersModule.name;