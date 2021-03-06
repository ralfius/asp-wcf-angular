﻿class ValidateSubmit {
    constructor() {
        this.scope = {};
        this.restrict = 'A';
    }

    link(scope, $el) {
        $el.bind('submit', function (event) {
            var form = angular.element(event.target);

            if (form.validate) {
                //if validation is enabled - process form

                var validate = form.validate();

                //this is default settings for unobtrusive validation
                validate.settings.ignore = ":hidden";

                if (form.valid()) {
                    scope.$apply(scope.submitCallback);
                    validate.resetForm();
                }

                //this disables default validation
                validate.settings.ignore = "*";
            } else {
                //if validation is disabled - execute callback

                scope.$apply(scope.submitCallback);
            }

            //preventing default form submition
            event.preventDefault();

            return false;
        });
    }
}

export default ValidateSubmit;