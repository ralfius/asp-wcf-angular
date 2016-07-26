import AppUsersModule from './users.module/users.module';


const root = angular.module('aspWcfAngular', ['ui.bootstrap',
    AppUsersModule])
    .config(AppConfig)
    .run(AppRun);

function AppConfig() {

}

function AppRun() {

}