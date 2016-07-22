(function (angular) {
    'use strict';

    angular.module('aspWcfAngular')
        .directive('capitalize', capitalize);

    function capitalize() {
        var directive = {
            scope: {
                model: '=capitalize'
            },
            restrict: 'A',
            link: link
        };

        return directive;

        function link(scope) {
            scope.$watch('model', function (newVal, oldVal) {
                if (newVal && newVal.length === 1) {
                    scope.model = newVal.toUpperCase();
                }
            });
        }
    }
}(angular));
