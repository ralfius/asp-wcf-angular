angular.module('aspWcfAngular')
    .controller('EditUserDialogCtrl', EditUserDialogCtrl);

EditUserDialogCtrl.$inject = ['userService', '$uibModalInstance', 'user'];

function EditUserDialogCtrl(userService, $uibModalInstance, user) {

    var vm = this;

    vm.user = user;
    vm.updateInfo = updateInfo;
    vm.cancel = cancel;


    function updateInfo() {
        userService.updateUser(vm.user).then(function (result) {
            $uibModalInstance.close(result.Data);
        });
    };

    function cancel() {
        $uibModalInstance.dismiss();
    };
}