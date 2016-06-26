angular.module('aspWcfAngular')
    .factory('userService', [
        'httpConnectionService', function (httpConnectionService) {

            var getUsers = function (search, pageNumber) {
                //try {
                //    try {
                //        throw new Error('test error');
                //    } catch (e) {
                //        throw e;
                //    }
                //} catch (e) {
                //    var debug = 10;
                //} 

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
                deleteUser: deleteUser
            };
        }
    ]);