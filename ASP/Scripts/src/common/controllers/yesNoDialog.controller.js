YesNoDialogController.$inject = ['$uibModalInstance', 'content'];

function YesNoDialogController($uibModalInstance, content) {

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

export default YesNoDialogController;