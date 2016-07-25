(function (angular) {
    'use strict';

    var userList = {
        templateUrl: 'usersListComponent.html',
        controller: UsersListCtrl,
        bindings: {
            users: '<',
            onDelete: '&',
            onUpdate: '&'
        }
    };

    UsersListCtrl.$inject = ['dialogService', 'displayMessageService', 'userService'];

    angular.module('aspWcfAngular')
        .component('usersList', userList);


    function UsersListCtrl(dialogService, displayMessageService, userService) {
        var vm = this;

        vm.delete = deleteUser;
        vm.edit = edit;
        vm.$onInit = $onInit;

        function $onInit() {
            var debug = 10;
        }

        function deleteUser(user) {
            vm.onDelete({ user: user });
        };

        function edit(user) {
            vm.onUpdate({ user: user });
        };
    }

})(angular);