describe('Unit: UsersCtrl:', function () {
    beforeEach(module('aspWcfAngular'));

    describe('activate invokes getUsers', function () {
        var usersCtrl;

        beforeEach(inject(function ($q, $controller, userService) {
            var deferred = $q.defer();

            // userService spy and stub
            spyOn(userService, 'getUsers').and.returnValue(deferred.promise);

            var $scope;
            usersCtrl = $controller('UsersCtrl', { $scope: $scope, userService: userService });
        }));

        it('should be called getUsers', inject(function ($q, $controller, userService) {
            expect(userService.getUsers).toHaveBeenCalled();
        }));

        it('should be called getUsers only once', inject(function ($q, $controller, userService) {
            expect(userService.getUsers).toHaveBeenCalledTimes(1);
        }));

        it('should be called getUsers with params', inject(function ($q, $controller, userService) {
            expect(userService.getUsers).toHaveBeenCalledWith('', 1);
        }));
    });
});