import AppUsersModule from './users.module/users.module';

import CapitalizeDirective from './common/directives/capitalize.directive';
import RemoveSpacesDirective from './common/directives/removeSpaces.directive';
import UnobtrusiveValidatorParseDirective from './common/directives/unobtrusiveValidatorParse.directive';
import ValidateSubmitDirective from './common/directives/validateSubmit.directive';

import DialogService from './common/services/DialogService';
import DisplayMessageService from './common/services/DisplayMessageService';
import ErrorProcessingService from './common/services/ErrorProcessingService';
import HttpConnectionService from './common/services/HttpConnectionService';

import MessageAreaController from './common/controllers/messageArea.controller';
import YesNoDialogController from './common/controllers/yesNoDialog.controller';


const root = angular.module('aspWcfAngular', ['ui.bootstrap',
    AppUsersModule])
    .directive('capitalize', () => new CapitalizeDirective)
    .directive('removeSpaces', () => new RemoveSpacesDirective)
    .directive('unobtrusiveValidatorParse', () => new UnobtrusiveValidatorParseDirective)
    .directive('validateSubmit', () => new ValidateSubmitDirective)

    .service('DialogService', DialogService)
    .service('DisplayMessageService', DisplayMessageService)
    .service('ErrorProcessingService', ErrorProcessingService)
    .service('HttpConnectionService', HttpConnectionService)

    .controller('MessageAreaController', MessageAreaController)
    .controller('YesNoDialogController', YesNoDialogController);