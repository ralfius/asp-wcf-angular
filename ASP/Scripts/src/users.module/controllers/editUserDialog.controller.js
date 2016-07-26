class EditUserDialogController {
    constructor(userService, $uibModalInstance, user) {
        this._userService = userService;
        this.user = user;
        this._$uibModalInstance = $uibModalInstance;
    }

    updateInfo() {
        this._userService.updateUser(this.user).then(function (result) {
            this._$uibModalInstance.close(result.Data);
        });
    };

    cancel() {
        this._$uibModalInstance.dismiss();
    };
}

EditUserDialogController.$inject = ['UserService', '$uibModalInstance', 'user'];

export default EditUserDialogController;