angular.module('aspWcfAngular')
    .controller('MessageAreaCtrl', MessageAreaCtrl);

MessageAreaCtrl.$inject = ['$rootScope'];

function MessageAreaCtrl($rootScope) {
    var vm = this;

    vm.closeAlert = closeAlert;

    $rootScope.alerts = $rootScope.alerts || [];
            
    function closeAlert(index) {
        $rootScope.alerts.splice(index, 1);
    };
}
