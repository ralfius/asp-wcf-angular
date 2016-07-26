class RemoveSpaces {
    constructor() {
        this.scope = {
            model: '=removeSpaces'
        };
        this.restrict = 'A';
    }

    link(scope) {
        scope.$watch('model', function (newVal, oldVal) {
            if (newVal && angular.isString(newVal)) {
                scope.model = newVal.replace(/\s+/g, '');
            }
        });
    }
}

export default RemoveSpaces;