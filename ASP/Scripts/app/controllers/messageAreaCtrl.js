angular.module('aspWcfAngular')
    .controller('MessageAreaCtrl', ['$scope', '$rootScope',
        function ($scope, $rootScope) {
            $rootScope.alerts = $rootScope.alerts || [];
            
            $scope.closeAlert = function (index) {
                $scope.alerts.splice(index, 1);
            };
        }
    ]);