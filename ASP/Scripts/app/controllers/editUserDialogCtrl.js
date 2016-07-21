angular.module('aspWcfAngular')
    .controller('EditUserDialogCtrl', EditUserDialogCtrl);

EditUserDialogCtrl.$inject = ['$scope', 'userService', '$uibModalInstance', 'user'];

function EditUserDialogCtrl($scope, userService, $uibModalInstance, user) {
    $scope.user = user;

    $scope.updateInfo = function () {
        userService.updateUser($scope.user).then(function (result) {
            $uibModalInstance.close(result.Data);
        });
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss();
    };
}