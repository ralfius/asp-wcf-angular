class Capitalize {
    constructor() {
        this.scope = {
            model: '=capitalize'
        };
        this.restrict = 'A';
    }

    link(scope) {
        scope.$watch('model', function (newVal, oldVal) {
            if (newVal && newVal.length === 1) {
                scope.model = newVal.toUpperCase();
            }
        });
    }
}

export default Capitalize;