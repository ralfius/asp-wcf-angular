describe('Unit: UsersCtrl:', function () {
    beforeEach(module('aspWcfAngular'));

    describe('activate invokes getUsers', function () {
        var usersCtrl;

        beforeEach(inject(function ($q, $controller, UserService) {
            var deferred = $q.defer();

            // UserService spy and stub
            spyOn(UserService, 'getUsers').and.returnValue(deferred.promise);

            var $scope;
            usersCtrl = $controller('UsersCtrl', { $scope: $scope, UserService: UserService });
        }));

        it('should be called getUsers', inject(function ($q, $controller, UserService) {
            expect(UserService.getUsers).toHaveBeenCalled();
        }));

        it('should be called getUsers only once', inject(function ($q, $controller, UserService) {
            expect(UserService.getUsers).toHaveBeenCalledTimes(1);
        }));

        it('should be called getUsers with params', inject(function ($q, $controller, UserService) {
            expect(UserService.getUsers).toHaveBeenCalledWith('', 1);
        }));
    });
});