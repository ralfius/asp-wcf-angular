angular.module('aspWcfAngular')
    .controller('YesNoDialogCtrl', YesNoDialogCtrl);

YesNoDialogCtrl.$inject = ['$uibModalInstance', 'content'];

function YesNoDialogCtrl($uibModalInstance, content) {

    var vm = this;

    vm.content = content;
    vm.ok = ok;
    vm.cancel = cancel;

    function ok() {
        $uibModalInstance.close();
    };

    function cancel() {
        $uibModalInstance.dismiss();
    };
}