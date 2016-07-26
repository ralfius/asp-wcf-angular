class ErrorProcessingService {
    constructor($log, displayMessageService){
        this._$log = $log;
        this._displayMessageService = displayMessageService;
    }

    processHttpError (response) {
        this._$log.error(response.statusText);
    };

    processErrorResponse(response) {
        this._$log.error('Got server error: status = ' + response.data.Status + ', message = ' + response.data.Message);
        this._displayMessageService.showError(response.data.Message);
    };

    canProcessServerResponse(response) {
        return response.status == 200 && response.data.Status === AWA.enums.status.success;
    };
};

ErrorProcessingService.$inject = ['$log', 'DisplayMessageService'];

export default ErrorProcessingService;