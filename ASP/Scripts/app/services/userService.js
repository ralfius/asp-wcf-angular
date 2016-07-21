angular.module('aspWcfAngular')
    .factory('userService', usersService);

usersService.$inject = ['httpConnectionService', 'dialogService'];

function usersService(httpConnectionService, dialogService) {

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
        return dialogService.openCustomDialogDialog('editUserDialog.html', 'EditUserDialogCtrl', {user : user});
    };
            
    function getUsers(search, pageNumber) {
        //TODO: create format filter
        var url = AWA.urls.user.list.replace('{0}', search || '').replace('{1}', pageNumber || 1);

        return httpConnectionService.get(url);
    };

    function deleteUser(user) {
        var url = AWA.urls.user.delete;

        return httpConnectionService.post(url, { userId: user.UserId });
    };
};