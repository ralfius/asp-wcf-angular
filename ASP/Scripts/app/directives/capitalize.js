(function (angular) {
    'use strict';

    angular.module('aspWcfAngular')
        .directive('capitalize', function () {
            return {
                scope: {
                    model: '=capitalize'
                },
                restrict: 'A',
                link: function(scope, $el, attrs, ctrls) {
                    scope.$watch('model', function(newVal, oldVal) {
                        if (newVal && newVal.length === 1) {
                            scope.model = newVal.toUpperCase();
                        }
                    });
                }
            };
        });
}(angular));
