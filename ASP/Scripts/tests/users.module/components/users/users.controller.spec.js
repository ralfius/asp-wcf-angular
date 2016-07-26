describe('Unit test: users.module/components/users/users.controller', function () {
    beforeEach(module('aspWcfAngular'));

    describe('activate invokes getUsers', function () {
        debugger;

        var usersController;
        var userService;

        beforeEach(inject(function ($q, $componentController, UserService) {
            var deferred = $q.defer();

            // UserService spy and stub
            spyOn(UserService, 'getUsers').and.returnValue(deferred.promise);

            UserService.foo = 'bar';

            usersController = $componentController('users', { UserService });
            usersController.$onInit();
        }));

        it('should be called getUsers', inject(function (UserService) {
            expect(UserService.getUsers).toHaveBeenCalled();
        }));

        it('should be called getUsers only once', inject(function (UserService) {
            expect(UserService.getUsers).toHaveBeenCalledTimes(1);
        }));

        it('should be called getUsers with params', inject(function (UserService) {
            expect(UserService.getUsers).toHaveBeenCalledWith('', 1);
        }));
    });

});


