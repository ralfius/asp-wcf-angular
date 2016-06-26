angular.module('aspWcfAngular')
    .service('displayMessageService', ['$rootScope',
        function ($rootScope) {
            this.showError = function (message) {
                $rootScope.alerts.push({ type: 'danger', message: message })
            };

            this.showSuccess = function (message) {
                $rootScope.alerts.push({ type: 'success', message: message })
            };

            this.showWarning = function (message) {
                $rootScope.alerts.push({ type: 'warning', message: message })
            };
        }
    ]);