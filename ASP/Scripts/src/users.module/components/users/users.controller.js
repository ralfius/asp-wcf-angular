UsersController.$inject = ['dialogService', 'displayMessageService', 'userService'];

function UsersController(dialogService, displayMessageService, userService) {
    var vm = this;

    vm.search = '';
    vm.usersPage = { PageNumber: 1 };
    vm.initSearch = initSearch;
    vm.nextPage = nextPage;
    vm.deleteUser = deleteUser;
    vm.createUser = createUser;
    vm.edit = edit;

    activate();

    function activate() {
        getUsers();
    }

    function getUsers() {
        userService.getUsers(vm.search, vm.usersPage.PageNumber)
            .then(function (result) {
                vm.usersPage = result.Data;
            });
    };

    function refreshPage() {
        userService.getUsers(vm.search, vm.usersPage.PageNumber)
            .then(function (result) {
                vm.usersPage = result.Data;
            });
    };


    function initSearch() {
        userService.getUsers(vm.search, 1)
            .then(function (result) {
                vm.usersPage = result.Data;
            });
    };

    function nextPage() {
        if (!vm.usersPage.IsLastpage) {
            userService.getUsers(vm.search, vm.usersPage.PageNumber + 1)
                .then(function (result) {
                    vm.usersPage = result.Data
                });
        }
    };

    function deleteUser(user) {
        userService.deleteUser(user).then(function (result) {
            if (result.Message) {
                displayMessageService.showSuccess(result.Message);
            }
            refreshPage();
        });
    };

    function createUser() {
        userService.createUser().then(function (user) {
            refreshPage();
        });
    };

    function edit(user) {
        userService.editUser(user).then(function (data) {
            refreshPage();
        });
    };
}

export default UsersController;