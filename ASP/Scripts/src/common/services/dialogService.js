﻿class dialogService {
    constructor($uibModal){
        this._$uibModal = $uibModal;
    }

    openCustomDialogDialog (templateUrl, controller, resolveData) {
        var modalInstance = this._$uibModal.open({
            templateUrl: templateUrl,
            controller: controller,
            controllerAs: 'vm',
            resolve: resolveData
        });

        return modalInstance.result;
    };


    openYesNoDialog (title, message) {
        var modalInstance = this._$uibModal.open({
            templateUrl: 'yesNoDialog.html',
            controller: 'YesNoDialogCtrl',
            controllerAs: 'vm',
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

dialogService.$inject = ['$uibModal'];

export default dialogService;