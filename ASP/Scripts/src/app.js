import AppUsersModule from './users.module/users.module';
import DialogService from './common/services/dialogService';
import DisplayMessageService from './common/services/displayMessageService';
import ErrorProcessingService from './common/services/errorProcessingService';
import HttpConnectionService from './common/services/httpConnectionService';


const root = angular.module('aspWcfAngular', ['ui.bootstrap',
    AppUsersModule])
    .config(AppConfig)
    .run(AppRun)
    .service('dialogService', DialogService)
    .service('displayMessageService', DisplayMessageService)
    .service('errorProcessingService', ErrorProcessingService)
    .service('httpConnectionService', HttpConnectionService);

function AppConfig() {

}

function AppRun() {

}