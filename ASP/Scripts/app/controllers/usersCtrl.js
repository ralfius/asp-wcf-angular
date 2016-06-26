angular.module('aspWcfAngular')
    .controller('UsersCtrl', ['$scope', 'dialogService', 'userService',
        function ($scope, dialogService, userService) {
            $scope.search = '';
            $scope.usersPage = { PageNumber: 1 };

            var getUsers = function () {
                userService.getUsers($scope.search, $scope.usersPage.PageNumber)
                    .then(function (data) {
                        $scope.usersPage = data;
                    });
            };

            var init = function () {
                getUsers();
            };

            var refreshPage = function () {
                userService.getUsers($scope.search, $scope.usersPage.PageNumber)
                    .then(function (data) {
                        $scope.usersPage = data;
                    });
            };
            
            $scope.initSearch = function () {
                userService.getUsers($scope.search, 1)
                    .then(function (data) {
                        $scope.usersPage = data;
                    });
            };

            $scope.nextPage = function () {
                if (!$scope.usersPage.IsLastpage) {
                    userService.getUsers($scope.search, $scope.usersPage.PageNumber + 1)
                        .then(function (data) {
                            $scope.usersPage = data;
                        });
                }
            };

            $scope.delete = function (user) {
                var message = String.format(AWA.resources.message.SureToDeleteUser, user.FirstName + ' ' + user.LastName);

                dialogService.openYesNoDialog(AWA.resources.title.Delete_user, message)
                    .then(function () {
                        userService.deleteUser(user).then(function () {
                            refreshPage();
                        });
                    });
            };

            init();
        }
    ]);