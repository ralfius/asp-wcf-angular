userService.$inject = ['$q', 'httpConnectionService', 'dialogService'];

function userService($q, httpConnectionService, dialogService) {

    return {
        getUsers: getUsers,
        deleteUser: deleteUser,
        createUser: createUser,
        editUser: editUser,
        updateUser: updateUser
    };

    function createUser() {
        return openEditUserDialog({});
    };

    function editUser(user) {
        return openEditUserDialog(angular.copy(user));
    };

    function updateUser(user) {
        return httpConnectionService.post(AWA.urls.user.update, user);
    };

    function openEditUserDialog(user) {
        return dialogService.openCustomDialogDialog('editUserDialog.html', 'EditUserDialogCtrl', { user: user });
    };

    function getUsers(search, pageNumber) {
        //TODO: create format filter
        var url = AWA.urls.user.list.replace('{0}', search || '').replace('{1}', pageNumber || 1);

        return httpConnectionService.get(url);
    };

    function deleteUser(user) {
        var deferred = $q.defer();
        var message = String.format(AWA.resources.message.SureToDeleteUser, user.FirstName + ' ' + user.LastName);

        dialogService.openYesNoDialog(AWA.resources.title.Delete_user, message)
            .then(function () {
                var url = AWA.urls.user.delete;

                httpConnectionService.post(url, { userId: user.UserId })
                    .then(function (response) {
                        deferred.resolve(response);
                    });
            });

        return deferred.promise;
    };
};

export default userService;