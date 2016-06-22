angular.module('aspWcfAngular')
    .service('httpConnectionService', ['$http', '$q', 'errorProcessingService', 
        function ($http, $q, errorProcessingService) {

            this.get = function (url) {
                var deferred = $q.defer();

                $http.get(url).then(function (response) {
                    if (errorProcessingService.canProcessServerResponse(response)) {
                        return deferred.resolve(response.data.Data);
                    } else {
                        errorProcessingService.processErrorResponse(response);
                    }
                }, function (response) {
                    errorProcessingService.processHttpError(response)
                });

                return deferred.promise;
            };
        }]);