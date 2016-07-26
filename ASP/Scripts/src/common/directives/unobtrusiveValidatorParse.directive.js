class UnobtrusiveValidatorParse {
    constructor() {
        this.scope = {};
        this.restrict = 'A';
    }

    link(scope, $el) {
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

export default UnobtrusiveValidatorParse;