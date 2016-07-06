angular.module('aspWcfAngular')
    .factory('userService', [
        'httpConnectionService', 'dialogService', function (httpConnectionService, dialogService) {

            var createUser = function () {
                return openEditUserDialog({});
            };

            var editUser = function (user) {
                return openEditUserDialog(angular.copy(user));
            };

            var updateUser = function (user) {
                return httpConnectionService.post(AWA.urls.user.update, user);
            };

            var openEditUserDialog = function (user) {
                return dialogService.openCustomDialogDialog('editUserDialog.html', 'EditUserDialogCtrl', {user : user});
            };
            
            var getUsers = function (search, pageNumber) {
                //TODO: create format filter
                var url = AWA.urls.user.list.replace('{0}', search || '').replace('{1}', pageNumber || 1);

                return httpConnectionService.get(url);
            };

            var deleteUser = function (user) {
                var url = AWA.urls.user.delete;

                return httpConnectionService.post(url, { userId: user.UserId });
            };


            return {
                getUsers: getUsers,
                deleteUser: deleteUser,
                createUser: createUser,
                editUser: editUser,
                updateUser: updateUser
            };
        }
    ]);