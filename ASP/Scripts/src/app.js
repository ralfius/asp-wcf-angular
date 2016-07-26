import AppUsersModule from './users.module/users.module';
import DialogService from './common/services/DialogService';
import DisplayMessageService from './common/services/DisplayMessageService';
import ErrorProcessingService from './common/services/ErrorProcessingService';
import HttpConnectionService from './common/services/HttpConnectionService';
import MessageAreaController from './common/controllers/messageArea.controller';
import YesNoDialogController from './common/controllers/yesNoDialog.controller';


const root = angular.module('aspWcfAngular', ['ui.bootstrap',
    AppUsersModule])
    .service('DialogService', DialogService)
    .service('DisplayMessageService', DisplayMessageService)
    .service('ErrorProcessingService', ErrorProcessingService)
    .service('HttpConnectionService', HttpConnectionService)
    .controller('MessageAreaController', MessageAreaController)
    .controller('YesNoDialogController', YesNoDialogController);