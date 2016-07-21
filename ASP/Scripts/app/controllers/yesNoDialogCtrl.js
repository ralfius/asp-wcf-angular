angular.module('aspWcfAngular')
    .controller('YesNoDialogCtrl', YesNoDialogCtrl);

YesNoDialogCtrl.$inject = ['$scope', '$uibModalInstance', 'content'];

function YesNoDialogCtrl($scope, $uibModalInstance, content) {
    $scope.content = content;

    $scope.ok = function () {
        $uibModalInstance.close();
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss();
    };
}