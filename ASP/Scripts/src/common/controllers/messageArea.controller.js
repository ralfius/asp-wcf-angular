MessageAreaController.$inject = ['$rootScope'];

function MessageAreaController($rootScope) {
    var vm = this;

    vm.closeAlert = closeAlert;

    $rootScope.alerts = $rootScope.alerts || [];

    function closeAlert(index) {
        $rootScope.alerts.splice(index, 1);
    };
}

export default MessageAreaController;