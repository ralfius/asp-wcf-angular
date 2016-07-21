angular.module('aspWcfAngular')
    .controller('UsersCtrl', UsersCtrl);

UsersCtrl.$inject = ['$scope', 'dialogService', 'displayMessageService', 'userService'];

function UsersCtrl($scope, dialogService, displayMessageService, userService) {
    $scope.search = '';
    $scope.usersPage = { PageNumber: 1 };

    var getUsers = function () {
        userService.getUsers($scope.search, $scope.usersPage.PageNumber)
            .then(function (result) {
                $scope.usersPage = result.Data;
            });
    };

    var init = function () {
        getUsers();
    };

    var refreshPage = function () {
        userService.getUsers($scope.search, $scope.usersPage.PageNumber)
            .then(function (result) {
                $scope.usersPage = result.Data;
            });
    };

    $scope.initSearch = function () {
        userService.getUsers($scope.search, 1)
            .then(function (result) {
                $scope.usersPage = result.Data;
            });
    };

    $scope.nextPage = function () {
        if (!$scope.usersPage.IsLastpage) {
            userService.getUsers($scope.search, $scope.usersPage.PageNumber + 1)
                .then(function (result) {
                    $scope.usersPage = result.Data
                });
        }
    };

    $scope.delete = function (user) {
        var message = String.format(AWA.resources.message.SureToDeleteUser, user.FirstName + ' ' + user.LastName);

        dialogService.openYesNoDialog(AWA.resources.title.Delete_user, message)
            .then(function () {
                userService.deleteUser(user).then(function (result) {
                    if (result.Message) {
                        displayMessageService.showSuccess(result.Message);
                    }
                    refreshPage();
                });
            });
    };

    $scope.createUser = function () {
        userService.createUser().then(function (user) {
            refreshPage();
        });
    };

    $scope.edit = function (user) {
        userService.editUser(user).then(function (data) {
            refreshPage();
        });
    };

    init();
}