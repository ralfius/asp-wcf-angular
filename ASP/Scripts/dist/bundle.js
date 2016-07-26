(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _users = require('./users.module/users.module');

var _users2 = _interopRequireDefault(_users);

var _DialogService = require('./common/services/DialogService');

var _DialogService2 = _interopRequireDefault(_DialogService);

var _DisplayMessageService = require('./common/services/DisplayMessageService');

var _DisplayMessageService2 = _interopRequireDefault(_DisplayMessageService);

var _ErrorProcessingService = require('./common/services/ErrorProcessingService');

var _ErrorProcessingService2 = _interopRequireDefault(_ErrorProcessingService);

var _HttpConnectionService = require('./common/services/HttpConnectionService');

var _HttpConnectionService2 = _interopRequireDefault(_HttpConnectionService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var root = angular.module('aspWcfAngular', ['ui.bootstrap', _users2.default]).service('DialogService', _DialogService2.default).service('DisplayMessageService', _DisplayMessageService2.default).service('ErrorProcessingService', _ErrorProcessingService2.default).service('HttpConnectionService', _HttpConnectionService2.default);

},{"./common/services/DialogService":2,"./common/services/DisplayMessageService":3,"./common/services/ErrorProcessingService":4,"./common/services/HttpConnectionService":5,"./users.module/users.module":10}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DialogService = function () {
    function DialogService($uibModal) {
        _classCallCheck(this, DialogService);

        this._$uibModal = $uibModal;
    }

    _createClass(DialogService, [{
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

    return DialogService;
}();

;

DialogService.$inject = ['$uibModal'];

exports.default = DialogService;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DisplayMessageService = function () {
    function DisplayMessageService($rootScope) {
        _classCallCheck(this, DisplayMessageService);

        this._$rootScope = $rootScope;
    }

    _createClass(DisplayMessageService, [{
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

    return DisplayMessageService;
}();

DisplayMessageService.$inject = ['$rootScope'];

exports.default = DisplayMessageService;

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ErrorProcessingService = function () {
    function ErrorProcessingService($log, displayMessageService) {
        _classCallCheck(this, ErrorProcessingService);

        this._$log = $log;
        this._displayMessageService = displayMessageService;
    }

    _createClass(ErrorProcessingService, [{
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

    return ErrorProcessingService;
}();

;

ErrorProcessingService.$inject = ['$log', 'DisplayMessageService'];

exports.default = ErrorProcessingService;

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HttpConnectionService = function () {
    function HttpConnectionService($http, $q, errorProcessingService) {
        _classCallCheck(this, HttpConnectionService);

        this._$http = $http;
        this._$q = $q;
        this._errorProcessingService = errorProcessingService;
    }

    _createClass(HttpConnectionService, [{
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

    return HttpConnectionService;
}();

;

HttpConnectionService.$inject = ['$http', '$q', 'ErrorProcessingService'];

exports.default = HttpConnectionService;

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

UsersController.$inject = ['DialogService', 'DisplayMessageService', 'UserService'];

exports.default = UsersController;

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EditUserDialogController = function () {
    function EditUserDialogController(userService, $uibModalInstance, user) {
        _classCallCheck(this, EditUserDialogController);

        this._userService = userService;
        this.user = user;
        this._$uibModalInstance = $uibModalInstance;
    }

    _createClass(EditUserDialogController, [{
        key: 'updateInfo',
        value: function updateInfo() {
            this._userService.updateUser(this.user).then(function (result) {
                this._$uibModalInstance.close(result.Data);
            });
        }
    }, {
        key: 'cancel',
        value: function cancel() {
            this._$uibModalInstance.dismiss();
        }
    }]);

    return EditUserDialogController;
}();

EditUserDialogController.$inject = ['UserService', '$uibModalInstance', 'user'];

exports.default = EditUserDialogController;

},{}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserService = function () {
    function UserService($q, httpConnectionService, DialogService) {
        _classCallCheck(this, UserService);

        this._$q = $q;
        this._httpConnectionService = httpConnectionService;
        this._dialogService = DialogService;
    }

    _createClass(UserService, [{
        key: 'createUser',
        value: function createUser() {
            return this.openEditUserDialog({});
        }
    }, {
        key: 'editUser',
        value: function editUser(user) {
            return this.openEditUserDialog(angular.copy(user));
        }
    }, {
        key: 'updateUser',
        value: function updateUser(user) {
            return this._httpConnectionService.post(AWA.urls.user.update, user);
        }
    }, {
        key: 'openEditUserDialog',
        value: function openEditUserDialog(user) {
            return this._dialogService.openCustomDialogDialog('editUserDialog.html', 'EditUserDialogController', { user: user });
        }
    }, {
        key: 'getUsers',
        value: function getUsers(search, pageNumber) {
            //TODO: create format filter
            var url = AWA.urls.user.list.replace('{0}', search || '').replace('{1}', pageNumber || 1);

            return this._httpConnectionService.get(url);
        }
    }, {
        key: 'deleteUser',
        value: function deleteUser(user) {
            var deferred = this._$q.defer();
            var message = String.format(AWA.resources.message.SureToDeleteUser, user.FirstName + ' ' + user.LastName);
            var _this = this;

            this._dialogService.openYesNoDialog(AWA.resources.title.Delete_user, message).then(function () {
                var url = AWA.urls.user.delete;

                _this.HttpConnectionService.post(url, { userId: user.UserId }).then(function (response) {
                    deferred.resolve(response);
                });
            });

            return deferred.promise;
        }
    }]);

    return UserService;
}();

;

UserService.$inject = ['$q', 'HttpConnectionService', 'DialogService'];

exports.default = UserService;

},{}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _users = require('./components/users/users.component');

var _users2 = _interopRequireDefault(_users);

var _UserService = require('./services/UserService');

var _UserService2 = _interopRequireDefault(_UserService);

var _editUserDialog = require('./controllers/editUserDialog.controller');

var _editUserDialog2 = _interopRequireDefault(_editUserDialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AppUsersModule = angular.module('aspWcfAngular.users', ['ui.router']).config(AppConfig).run(AppRun).component('users', _users2.default).service('UserService', _UserService2.default).controller('EditUserDialogController', _editUserDialog2.default);

AppConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

function AppConfig($stateProvider, $urlRouterProvider) {
    $stateProvider.state('users', {
        url: '/users',
        component: 'users'
    });
    $urlRouterProvider.otherwise('/users');
}

function AppRun() {}

exports.default = AppUsersModule.name;

},{"./components/users/users.component":6,"./controllers/editUserDialog.controller":8,"./services/UserService":9}]},{},[1])


//# sourceMappingURL=bundle.js.map
