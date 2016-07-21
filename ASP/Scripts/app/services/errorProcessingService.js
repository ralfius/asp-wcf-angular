angular.module('aspWcfAngular')
    .service('errorProcessingService', errorProcessingService);

errorProcessingService.$inject = ['$log', 'displayMessageService'];

function errorProcessingService($log, displayMessageService) {
    var service = {
        processHttpError: processHttpError,
        processErrorResponse: processErrorResponse,
        canProcessServerResponse: canProcessServerResponse
    };

    return service;

    function processHttpError (response) {
        $log.error(response.statusText);
    };

    function processErrorResponse(response) {
        $log.error('Got server error: status = ' + response.data.Status + ', message = ' + response.data.Message);
        displayMessageService.showError(response.data.Message);
    };

    function canProcessServerResponse(response) {
        return response.status == 200 && response.data.Status === AWA.enums.status.success;
    };
};