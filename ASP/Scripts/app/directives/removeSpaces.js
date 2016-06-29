(function (angular) {
    'use strict';

    angular.module('aspWcfAngular')
        .directive('removeSpaces', function () {
            return {
                scope: {
                    model: '=removeSpaces'
                },
                restrict: 'A',
                link: function(scope, $el, attrs, ctrls) {
                    scope.$watch('model', function(newVal, oldVal) {
                        if (newVal && angular.isString(newVal)) {
                            scope.model = newVal.replace(/\s+/g, '');
                        }
                    });
                }
            };
        });
}(angular));
