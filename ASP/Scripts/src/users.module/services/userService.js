class UserService {
    constructor($q, httpConnectionService, dialogService){
        this._$q = $q;
        this._httpConnectionService = httpConnectionService;
        this._dialogService = dialogService;
    }

    createUser() {
        return this.openEditUserDialog({});
    };

    editUser(user) {
        return this.openEditUserDialog(angular.copy(user));
    };

    updateUser(user) {
        return this._httpConnectionService.post(AWA.urls.user.update, user);
    };

    openEditUserDialog(user) {
        return this._dialogService.openCustomDialogDialog('editUserDialog.html', 'EditUserDialogController', { user: user });
    };

    getUsers(search, pageNumber) {
        console.log('userService.getUsers called');

        //TODO: create format filter
        let url = AWA.urls.user.list.replace('{0}', search || '').replace('{1}', pageNumber || 1);

        return this._httpConnectionService.get(url);
    };

    deleteUser(user) {
        let deferred = this._$q.defer();
        let message = String.format(AWA.resources.message.SureToDeleteUser, user.FirstName + ' ' + user.LastName);
        let _this = this;

        this._dialogService.openYesNoDialog(AWA.resources.title.Delete_user, message)
            .then(function () {
                var url = AWA.urls.user.delete;

                _this.HttpConnectionService.post(url, { userId: user.UserId })
                    .then(function (response) {
                        deferred.resolve(response);
                    });
            });

        return deferred.promise;
    };
};

UserService.$inject = ['$q', 'HttpConnectionService', 'DialogService'];

export default UserService;