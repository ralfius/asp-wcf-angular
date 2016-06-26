angular.module('aspWcfAngular')
    .service('dialogService', ['$uibModal',
        function ($uibModal) {

            this.openYesNoDialog = function (title, message) {
                var modalInstance = $uibModal.open({
                    templateUrl: 'yesNoDialog.html',
                    controller: 'yesNoDialogCtrl',
                    resolve: {
                        content: {
                            title: title,
                            message: message
                        }
                    }
                });

                return modalInstance.result;
            };
        }
    ]);