angular.module('aspWcfAngular')
    .controller('UsersCtrl', ['$scope', 'userService',
        function ($scope, userService) {
            $scope.search = '';
            $scope.usersPage = { PageNumber : 1 };

            var getUsers = function () {
                userService.getUsers($scope.search, $scope.usersPage.PageNumber)
                    .then(function (data) {
                        $scope.usersPage = data;
                    });
            };

            var init = function () {
                getUsers();
            }

            init();
        }
    ]);