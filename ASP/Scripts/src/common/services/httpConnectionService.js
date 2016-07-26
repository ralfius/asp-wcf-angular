class HttpConnectionService {

    constructor($http, $q, errorProcessingService){
        this._$http = $http;
        this._$q = $q;
        this._errorProcessingService = errorProcessingService;
    }

    get(url) {
        let deferred = this._$q.defer();
        let _this = this;

        this._$http.get(url).then(function (response) {
            if (_this._errorProcessingService.canProcessServerResponse(response)) {
                return deferred.resolve(response.data);
            } else {
                _this._errorProcessingService.processErrorResponse(response);
            }
        }, function (response) {
            _this._errorProcessingService.processHttpError(response)
        });

        return deferred.promise;
    };

    post(url, data) {
        let deferred = this._$q.defer();
        let _this = this;

        this._$http.post(url, data).then(function (response) {
            if (_this._errorProcessingService.canProcessServerResponse(response)) {
                return deferred.resolve(response.data);
            } else {
                _this._errorProcessingService.processErrorResponse(response);
            }
        }, function (response) {
            _this._errorProcessingService.processHttpError(response)
        });

        return deferred.promise;
    };
};

HttpConnectionService.$inject = ['$http', '$q', 'ErrorProcessingService'];

export default HttpConnectionService;