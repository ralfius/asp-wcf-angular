angular.module('aspWcfAngular')
    .service('dialogService', ['$uibModal',
        function ($uibModal) {

            this.openCustomDialogDialog = function (templateUrl, controller, resolveData) {
                var modalInstance = $uibModal.open({
                    templateUrl: templateUrl,
                    controller: controller,
                    resolve: resolveData
                });

                return modalInstance.result;
            };


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