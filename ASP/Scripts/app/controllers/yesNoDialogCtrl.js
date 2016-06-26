angular.module('aspWcfAngular')
    .controller('yesNoDialogCtrl', ['$scope', '$uibModalInstance', 'content',
        function ($scope, $uibModalInstance, content) {
            $scope.content = content;

            $scope.ok = function () {
                $uibModalInstance.close();
            };

            $scope.cancel = function () {
                $uibModalInstance.dismiss();
            };
        }
    ]);