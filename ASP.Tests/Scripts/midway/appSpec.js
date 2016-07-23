describe('Midway: Testing app module', function () {
    var module;

    beforeEach(function () {
        module = angular.module('aspWcfAngular');
    });

    it('should be registered', function () {
        expect(module).not.toEqual(null);
    });


    describe('Dependencies:', function () {
        var deps;
        var hasModule = function (m) {
            return deps.indexOf(m) >= 0;
        };

        beforeEach(function () {
            deps = module.value('appName').requires;
        });

        // there could be tested module's dependencies
        it('should have ui.bootstrap', function () {
            expect(hasModule('ui.bootstrap')).toEqual(true);
        });
    });

});