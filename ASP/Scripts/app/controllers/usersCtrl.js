angular.module('testTask')
    .controller('UsersCtrl', [
        '$scope', 'userService',
        function ($scope, userService) {
            $scope.search = '';
            $scope.users = null;

            var init = function() {
                
            }
        }
    ]);