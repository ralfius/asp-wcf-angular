angular.module('testTask')
    .factory('userService', [
        'httpConnectionService', function (httpConnectionService) {

            var getUsers = function (search) {
                try {
                    try {
                        throw new Error('test error');
                    } catch (e) {
                        throw e;
                    }
                } catch (e) {
                    var debug = 10;
                } 
            };

            return { getUsers: getUsers };
        }
    ]);