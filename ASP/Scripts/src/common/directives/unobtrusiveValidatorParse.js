(function (angular) {
    'use strict';

    //this directive is used for performing validation of dynamic forms\controls
    //that are not validated on page load but should be processed once rendered
    angular.module('aspWcfAngular')
        .directive('unobtrusiveValidatorParse', unobtrusiveValidatorParse);

    function unobtrusiveValidatorParse() {
        var directive = {
            restrict: 'A',
            link: link
        };

        return directive;

        function link(scope, $el) {
            var form, el = angular.element($el);

            if (el.is('form')) {
                form = el;
            } else {
                form = el.closest('form');
            }

            form.removeData("validator");
            $.validator.unobtrusive.parse(form);
        }
    }
}(angular));
