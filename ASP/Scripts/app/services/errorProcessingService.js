angular.module('aspWcfAngular')
    .service('errorProcessingService', ['$log', 'displayMessageService', function ($log, displayMessageService) {
        this.processHttpError = function (response) {
            $log.error(response.statusText);
        };

        this.processErrorResponse = function (response) {
            $log.error('Got server error: status = ' + response.data.Status + ', message = ' + response.data.Message);
            displayMessageService.showError(response.data.Message);
        };

        this.canProcessServerResponse = function (response) {
            return response.status == 200 && response.data.Status === AWA.enums.status.success;
        };
    }]);