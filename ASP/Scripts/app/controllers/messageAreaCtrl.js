angular.module('aspWcfAngular')
    .controller('MessageAreaCtrl', MessageAreaCtrl);

MessageAreaCtrl.$inject = ['$scope', '$rootScope'];

function MessageAreaCtrl($scope, $rootScope) {
    $rootScope.alerts = $rootScope.alerts || [];
            
    $scope.closeAlert = function (index) {
        $scope.alerts.splice(index, 1);
    };
}
