angular.module('aspWcfAngular')
    .service('displayMessageService', displayMessageService);

displayMessageService.$inject = ['$rootScope'];

function displayMessageService($rootScope) {
    var service = {
        showError: showError,
        showSuccess: showSuccess,
        showWarning: showWarning
    };

    return service;

    function showError (message) {
        $rootScope.alerts.push({ type: 'danger', message: message })
    };

    function showSuccess(message) {
        $rootScope.alerts.push({ type: 'success', message: message })
    };

    function showWarning(message) {
        $rootScope.alerts.push({ type: 'warning', message: message })
    };
}