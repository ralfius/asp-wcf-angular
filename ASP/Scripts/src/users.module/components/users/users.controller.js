class UsersController {
    constructor(dialogService, displayMessageService, userService){
        this.search = '';
        this.usersPage = { PageNumber: 1 };

        this._dialogService = dialogService;
        this._displayMessageService = displayMessageService;
        this._userService = userService;
    }

    $onInit() {
        this.getUsers();
    }

    getUsers() {
        let _this = this;

        this._userService.getUsers(this.search, this.usersPage.PageNumber)
            .then(function (result) {
                _this.usersPage = result.Data;
            });
    };

    refreshPage() {
        let _this = this;

        this._userService.getUsers(this.search, this.usersPage.PageNumber)
            .then(function (result) {
                _this.usersPage = result.Data;
            });
    };


    initSearch() {
        let _this = this;

        this._userService.getUsers(this.search, 1)
            .then(function (result) {
                _this.usersPage = result.Data;
            });
    };

    nextPage() {
        let _this = this;

        if (!this.usersPage.IsLastpage) {
            this._userService.getUsers(this.search, this.usersPage.PageNumber + 1)
                .then(function (result) {
                    _this.usersPage = result.Data
                });
        }
    };

    deleteUser(user) {
        let _this = this;

        this._userService.deleteUser(user)
            .then(function (result) {
                if (result.Message) {
                    _this._displayMessageService.showSuccess(result.Message);
                }
                refreshPage();
            });
    };

    createUser() {
        let _this = this;

        this._userService.createUser()
            .then(function (user) {
                _this.refreshPage();
            });
    };

    edit(user) {
        let _this = this;

        this._userService.editUser(user)
            .then(function (data) {
                _this.refreshPage();
            });
    };
}

UsersController.$inject = ['dialogService', 'displayMessageService', 'userService'];

export default UsersController;