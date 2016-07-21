angular.module('aspWcfAngular')
    .service('httpConnectionService', httpConnectionService);

httpConnectionService.$inject = ['$http', '$q', 'errorProcessingService'];

function httpConnectionService($http, $q, errorProcessingService) {

    var service = {
        get: get,
        post: post
    };

    return service;

    function get(url) {
        var deferred = $q.defer();

        $http.get(url).then(function (response) {
            if (errorProcessingService.canProcessServerResponse(response)) {
                return deferred.resolve(response.data);
            } else {
                errorProcessingService.processErrorResponse(response);
            }
        }, function (response) {
            errorProcessingService.processHttpError(response)
        });

        return deferred.promise;
    };

    function post(url, data) {
        var deferred = $q.defer();

        $http.post(url, data).then(function (response) {
            if (errorProcessingService.canProcessServerResponse(response)) {
                return deferred.resolve(response.data);
            } else {
                errorProcessingService.processErrorResponse(response);
            }
        }, function (response) {
            errorProcessingService.processHttpError(response)
        });

        return deferred.promise;
    };
};