angular.module('aspWcfAngular')
    .controller('UsersCtrl', ['$scope', 'userService',
        function ($scope, userService) {
            $scope.search = '';
            $scope.users = { PageNumber : 1 };

            var getUsers = function () {
                userService.getUsers($scope.search, $scope.users.PageNumber)
                    .then(function (response) {
                        $scope.users = response.data;
                    });
            };

            var init = function () {
                getUsers();
            }

            init();
        }
    ]);