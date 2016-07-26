class DisplayMessageService {
    constructor($rootScope){
        this._$rootScope = $rootScope;
    }

    showError (message) {
        this._$rootScope.alerts.push({ type: 'danger', message: message })
    };

    showSuccess(message) {
        this._$rootScope.alerts.push({ type: 'success', message: message })
    };

    showWarning(message) {
        this._$rootScope.alerts.push({ type: 'warning', message: message })
    };
}

DisplayMessageService.$inject = ['$rootScope'];

export default DisplayMessageService;