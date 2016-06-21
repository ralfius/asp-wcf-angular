angular.module('testTask')
    .service('httpConnectionService', ['$http', '$q', function ($http, $q) {

        this.get = function () {
            var deferred = $q.defer();

            //$http.get()

            return deferred.promise;
        };

        return this;
    }]);