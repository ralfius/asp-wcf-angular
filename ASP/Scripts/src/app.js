import AppUsersModule from './users.module/users.module';

const root = angular.module('aspWcfAngular', ['ui.bootstrap',
    'ngRoute',
    AppUsersModule.name])
    .config(AppConfig)
    .run(AppRun);

function AppConfig() {

}

function AppRun() {

}