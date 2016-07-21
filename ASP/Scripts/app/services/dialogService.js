angular.module('aspWcfAngular')
    .service('dialogService', dialogService);

dialogService.$inject = ['$uibModal'];

function dialogService($uibModal) {

    var service = {
        openCustomDialogDialog: openCustomDialogDialog,
        openYesNoDialog: openYesNoDialog
    };

    return service;

    function openCustomDialogDialog (templateUrl, controller, resolveData) {
        var modalInstance = $uibModal.open({
            templateUrl: templateUrl,
            controller: controller,
            controllerAs: 'vm',
            resolve: resolveData
        });

        return modalInstance.result;
    };


    function openYesNoDialog (title, message) {
        var modalInstance = $uibModal.open({
            templateUrl: 'yesNoDialog.html',
            controller: 'YesNoDialogCtrl',
            resolve: {
                content: {
                    title: title,
                    message: message
                }
            }
        });

        return modalInstance.result;
    };
};