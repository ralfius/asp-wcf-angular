angular.module('aspWcfAngular')
    .controller('EditUserDialogCtrl', ['$scope', 'userService', '$uibModalInstance', 'user',
        function ($scope, userService, $uibModalInstance, user) {
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
    ]);