(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _users = require('./users.module/users.module');

var _users2 = _interopRequireDefault(_users);

var _dialogService = require('./common/services/dialogService');

var _dialogService2 = _interopRequireDefault(_dialogService);

var _displayMessageService = require('./common/services/displayMessageService');

var _displayMessageService2 = _interopRequireDefault(_displayMessageService);

var _errorProcessingService = require('./common/services/errorProcessingService');

var _errorProcessingService2 = _interopRequireDefault(_errorProcessingService);

var _httpConnectionService = require('./common/services/httpConnectionService');

var _httpConnectionService2 = _interopRequireDefault(_httpConnectionService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var root = angular.module('aspWcfAngular', ['ui.bootstrap', _users2.default]).config(AppConfig).run(AppRun).service('dialogService', _dialogService2.default).service('displayMessageService', _displayMessageService2.default).service('errorProcessingService', _errorProcessingService2.default).service('httpConnectionService', _httpConnectionService2.default);

function AppConfig() {}

function AppRun() {}

},{"./common/services/dialogService":2,"./common/services/displayMessageService":3,"./common/services/errorProcessingService":4,"./common/services/httpConnectionService":5,"./users.module/users.module":9}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var dialogService = function () {
    function dialogService($uibModal) {
        _classCallCheck(this, dialogService);

        this._$uibModal = $uibModal;
    }

    _createClass(dialogService, [{
        key: 'openCustomDialogDialog',
        value: function openCustomDialogDialog(templateUrl, controller, resolveData) {
            var modalInstance = this._$uibModal.open({
                templateUrl: templateUrl,
                controller: controller,
                controllerAs: 'vm',
                resolve: resolveData
            });

            return modalInstance.result;
        }
    }, {
        key: 'openYesNoDialog',
        value: function openYesNoDialog(title, message) {
            var modalInstance = this._$uibModal.open({
                templateUrl: 'yesNoDialog.html',
                controller: 'YesNoDialogCtrl',
                controllerAs: 'vm',
                resolve: {
                    content: {
                        title: title,
                        message: message
                    }
                }
            });

            return modalInstance.result;
        }
    }]);

    return dialogService;
}();

;

dialogService.$inject = ['$uibModal'];

exports.default = dialogService;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var displayMessageService = function () {
    function displayMessageService($rootScope) {
        _classCallCheck(this, displayMessageService);

        this._$rootScope = $rootScope;
    }

    _createClass(displayMessageService, [{
        key: 'showError',
        value: function showError(message) {
            this._$rootScope.alerts.push({ type: 'danger', message: message });
        }
    }, {
        key: 'showSuccess',
        value: function showSuccess(message) {
            this._$rootScope.alerts.push({ type: 'success', message: message });
        }
    }, {
        key: 'showWarning',
        value: function showWarning(message) {
            this._$rootScope.alerts.push({ type: 'warning', message: message });
        }
    }]);

    return displayMessageService;
}();

displayMessageService.$inject = ['$rootScope'];

exports.default = displayMessageService;

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var errorProcessingService = function () {
    function errorProcessingService($log, displayMessageService) {
        _classCallCheck(this, errorProcessingService);

        this._$log = $log;
        this._displayMessageService = displayMessageService;
    }

    _createClass(errorProcessingService, [{
        key: 'processHttpError',
        value: function processHttpError(response) {
            this._$log.error(response.statusText);
        }
    }, {
        key: 'processErrorResponse',
        value: function processErrorResponse(response) {
            this._$log.error('Got server error: status = ' + response.data.Status + ', message = ' + response.data.Message);
            this._displayMessageService.showError(response.data.Message);
        }
    }, {
        key: 'canProcessServerResponse',
        value: function canProcessServerResponse(response) {
            return response.status == 200 && response.data.Status === AWA.enums.status.success;
        }
    }]);

    return errorProcessingService;
}();

;

errorProcessingService.$inject = ['$log', 'displayMessageService'];

exports.default = errorProcessingService;

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var httpConnectionService = function () {
    function httpConnectionService($http, $q, errorProcessingService) {
        _classCallCheck(this, httpConnectionService);

        this._$http = $http;
        this._$q = $q;
        this._errorProcessingService = errorProcessingService;
    }

    _createClass(httpConnectionService, [{
        key: 'get',
        value: function get(url) {
            var deferred = this._$q.defer();
            var _this = this;

            this._$http.get(url).then(function (response) {
                if (_this._errorProcessingService.canProcessServerResponse(response)) {
                    return deferred.resolve(response.data);
                } else {
                    _this._errorProcessingService.processErrorResponse(response);
                }
            }, function (response) {
                _this._errorProcessingService.processHttpError(response);
            });

            return deferred.promise;
        }
    }, {
        key: 'post',
        value: function post(url, data) {
            var deferred = this._$q.defer();
            var _this = this;

            this._$http.post(url, data).then(function (response) {
                if (_this._errorProcessingService.canProcessServerResponse(response)) {
                    return deferred.resolve(response.data);
                } else {
                    _this._errorProcessingService.processErrorResponse(response);
                }
            }, function (response) {
                _this._errorProcessingService.processHttpError(response);
            });

            return deferred.promise;
        }
    }]);

    return httpConnectionService;
}();

;

httpConnectionService.$inject = ['$http', '$q', 'errorProcessingService'];

exports.default = httpConnectionService;

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _users = require('./users.controller');

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var users = {
    templateUrl: 'users.html',
    controller: _users2.default
};

exports.default = users;

},{"./users.controller":7}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UsersController = function () {
    function UsersController(dialogService, displayMessageService, userService) {
        _classCallCheck(this, UsersController);

        this.search = '';
        this.usersPage = { PageNumber: 1 };

        this._dialogService = dialogService;
        this._displayMessageService = displayMessageService;
        this._userService = userService;
    }

    _createClass(UsersController, [{
        key: '$onInit',
        value: function $onInit() {
            this.getUsers();
        }
    }, {
        key: 'getUsers',
        value: function getUsers() {
            var _this = this;

            this._userService.getUsers(this.search, this.usersPage.PageNumber).then(function (result) {
                _this.usersPage = result.Data;
            });
        }
    }, {
        key: 'refreshPage',
        value: function refreshPage() {
            var _this = this;

            this._userService.getUsers(this.search, this.usersPage.PageNumber).then(function (result) {
                _this.usersPage = result.Data;
            });
        }
    }, {
        key: 'initSearch',
        value: function initSearch() {
            var _this = this;

            this._userService.getUsers(this.search, 1).then(function (result) {
                _this.usersPage = result.Data;
            });
        }
    }, {
        key: 'nextPage',
        value: function nextPage() {
            var _this = this;

            if (!this.usersPage.IsLastpage) {
                this._userService.getUsers(this.search, this.usersPage.PageNumber + 1).then(function (result) {
                    _this.usersPage = result.Data;
                });
            }
        }
    }, {
        key: 'deleteUser',
        value: function deleteUser(user) {
            var _this = this;

            this._userService.deleteUser(user).then(function (result) {
                if (result.Message) {
                    _this._displayMessageService.showSuccess(result.Message);
                }
                refreshPage();
            });
        }
    }, {
        key: 'createUser',
        value: function createUser() {
            var _this = this;

            this._userService.createUser().then(function (user) {
                _this.refreshPage();
            });
        }
    }, {
        key: 'edit',
        value: function edit(user) {
            var _this = this;

            this._userService.editUser(user).then(function (data) {
                _this.refreshPage();
            });
        }
    }]);

    return UsersController;
}();

UsersController.$inject = ['dialogService', 'displayMessageService', 'userService'];

exports.default = UsersController;

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
userService.$inject = ['$q', 'httpConnectionService', 'dialogService'];

function userService($q, httpConnectionService, dialogService) {

    return {
        getUsers: getUsers,
        deleteUser: deleteUser,
        createUser: createUser,
        editUser: editUser,
        updateUser: updateUser
    };

    function createUser() {
        return openEditUserDialog({});
    };

    function editUser(user) {
        return openEditUserDialog(angular.copy(user));
    };

    function updateUser(user) {
        return httpConnectionService.post(AWA.urls.user.update, user);
    };

    function openEditUserDialog(user) {
        return dialogService.openCustomDialogDialog('editUserDialog.html', 'EditUserDialogCtrl', { user: user });
    };

    function getUsers(search, pageNumber) {
        //TODO: create format filter
        var url = AWA.urls.user.list.replace('{0}', search || '').replace('{1}', pageNumber || 1);

        return httpConnectionService.get(url);
    };

    function deleteUser(user) {
        var deferred = $q.defer();
        var message = String.format(AWA.resources.message.SureToDeleteUser, user.FirstName + ' ' + user.LastName);

        dialogService.openYesNoDialog(AWA.resources.title.Delete_user, message).then(function () {
            var url = AWA.urls.user.delete;

            httpConnectionService.post(url, { userId: user.UserId }).then(function (response) {
                deferred.resolve(response);
            });
        });

        return deferred.promise;
    };
};

exports.default = userService;

},{}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _users = require('./components/users/users.component');

var _users2 = _interopRequireDefault(_users);

var _userService = require('./services/userService');

var _userService2 = _interopRequireDefault(_userService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AppUsersModule = angular.module('aspWcfAngular.users', ['ui.router']).config(AppConfig).run(AppRun);

AppConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

function AppConfig($stateProvider, $urlRouterProvider) {
    $stateProvider.state('users', {
        url: '/users',
        component: 'users'
    });
    $urlRouterProvider.otherwise('/users');
}

function AppRun() {}

AppUsersModule.component('users', _users2.default).factory('userService', _userService2.default);

exports.default = AppUsersModule.name;

},{"./components/users/users.component":6,"./services/userService":8}]},{},[1])


//# sourceMappingURL=bundle.js.map
