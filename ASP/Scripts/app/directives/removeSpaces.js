(function (angular) {
    'use strict';

    angular.module('aspWcfAngular')
        .directive('removeSpaces', removeSpaces);

    function removeSpaces() {
        var directive = {
            scope: {
                model: '=removeSpaces'
            },
            restrict: 'A',
            link: link
        };

        return directive;

        function link(scope) {
            scope.$watch('model', function (newVal, oldVal) {
                if (newVal && angular.isString(newVal)) {
                    scope.model = newVal.replace(/\s+/g, '');
                }
            });
        }
    }
}(angular));
